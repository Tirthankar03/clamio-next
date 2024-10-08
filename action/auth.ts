"use server";
import axios, { AxiosError } from 'axios'
import z from "zod";
import { LoginSchema, TCreatorRegister, TLogin, TUserRegister } from "@/schemas";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError, CredentialsSignin } from "next-auth";
import { cookies} from 'next/headers'
import { signIn, signOut, auth } from "@/auth";
import { getUserCookie } from '@/helpers/auth';
export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  console.log(validatedFields);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password } = validatedFields.data;
  try {
   const result = await signIn("credentials", {
      email,
      password,
      // redirectTo: DEFAULT_LOGIN_REDIRECT,
      redirect: false
    });
    return {message: "user logged in successfully", success: true}
  } catch (error) {
    const someError = error as CredentialsSignin;
    const errorMessage = someError.cause?.err?.message || "Unknown error occurred";
    //error that we get in this catch block is the one that we throw inside of the functions and CredentialsSignin gets it 


    //here if you return something, that will be returned to the frontend after the error has occured

    if (error instanceof AuthError) {
      //from here you can easily return your error
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        case "CallbackRouteError":
          return { message: errorMessage, success: false };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error; //you need to positively throw an error or else you will get a redirect error
  }
};



//login route to backend
export async function credentialLogin(input:TLogin) {
  try {
    const response = await axios.post(`${process.env.BASE_API_URL}/api/v1/user-auth/login`,{email:input.email, password: input.password});
    const data = response.data;
    console.log("data in credentialLogin>>>>>>>>>>", data);

    console.log("cookies in credentialLogin>>>>>>>>>>", response.headers['set-cookie']);

    const userCookie = response.headers['set-cookie']?.find((cookie: string) => cookie.startsWith('user='));

    
    return {data, userCookie};

  } catch (error: any) {
    console.error("error in credentialLogin>>>>>>>>:", error.response?.data);

    throw new Error(error.response?.data.message)
    // Return error object with the message from the API response
    return { 
      error: error.response?.data?.message || "Login failed", 
      statusCode: error.response?.status || 500 
    };
  }
}







//register
//register user and redirect to login
export async function registerUser(input:TUserRegister) {
  try {
    const response = await axios.post(`${process.env.BASE_API_URL}/api/v1/user-auth/register`,{email:input.email, password: input.password, username: input.username});
    const data = response.data;
    // console.log("data in registerUser>>>>>>>>>>", data);

    return {message: "user registered successfully", success: true}

  } catch (error: any) {
    console.error("error in registerUser>>>>>>>>:", error.response?.data);

    // Return error object with the message from the API response
    // return { 
    //   error: error.response?.data?.message || "Login failed", 
    //   statusCode: error.response?.status || 500 
    // };
    return { message: error.response?.data?.message || "Signup failed", success: false }
  }
}


//creator register
  //step 1: user register onClick next
  //step 2: creator register and redirect to login
  export async function registerCreator(input: FormData) {
    const cookie = getUserCookie()

    console.log("cookie>>>>>>>>", cookie)

    try {
      for (let pair of input.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }
      //   of destructuring, you access the form data entries
      const response = await axios.post(
        `${process.env.BASE_API_URL}/api/v1/creator`,
        input, // Passing FormData directly
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important for handling file uploads
            Cookie: `user=${cookie}`,
          },
          withCredentials: true,
        },

      );
  
      const data = response.data;
      console.log("data in creatorRegister>>>>>>>>>>", data);
  
      return { message: "creator registered successfully", success: true };
    } catch (error: any) {
      console.error("error in creatorRegister>>>>>>>>:", error);
      console.error("error in creatorRegister>>>>>>>>:", error.response?.data);
  
      return {
        message: error.response?.data?.message || "Creator Signup failed",
        success: false,
      };
    }
  }
  
  // export async function registerCreator(input: FormData) {
  //   const cookie = getUserCookie(); // Retrieve the user cookie
  
  //   console.log("cookie>>>>>>>>", cookie);
  
  //   try {
  //     // Log the FormData entries for debugging
  //     for (let pair of input.entries()) {
  //       console.log(pair[0] + ": " + pair[1]);
  //     }
  
  //     // Make the API call using fetch
  //     const response = await fetch(`${process.env.BASE_API_URL}/api/v1/creator`, {
  //       method: "POST",
  //       body: input, // Directly pass FormData as the body
  //       headers: {
  //         // Do not specify 'Content-Type', fetch will automatically set the boundary for FormData
  //         Cookie: `user=${cookie}`, // Pass the cookie in the headers
  //       },
  //       credentials: "include", // Include cookies in the request (important for cross-origin requests)
  //     });
  
  //     // Handle the response
  //     if (!response.ok) {
  //       const errorData = await response.json(); // Parse the error response
  //       throw new Error(errorData.message || "Creator Signup failed");
  //     }
  
  //     const data = await response.json(); // Parse the response data
  //     console.log("data in creatorRegister>>>>>>>>>>", data);
  
  //     return { message: "creator registered successfully", success: true };
  //   } catch (error: any) {
  //     console.error("error in creatorRegister>>>>>>>>:", error);
  
  //     return {
  //       message: error.message || "Creator Signup failed",
  //       success: false,
  //     };
  //   }
  // }








export async function handleSignOut() {
  cookies().delete('user')
  await signOut();
}