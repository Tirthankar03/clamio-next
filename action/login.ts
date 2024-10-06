"use server";
import axios, { AxiosError } from 'axios'
import z from "zod";
import { LoginSchema, TCreatorRegister, TLogin, TUserRegister } from "@/schemas";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError, CredentialsSignin } from "next-auth";
import { cookies} from 'next/headers'
import { signIn, signOut, auth } from "@/auth";
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
    console.log("data in registerUser>>>>>>>>>>", data);

    return {data};

  } catch (error: any) {
    console.error("error in registerUser>>>>>>>>:", error.response?.data);

    // Return error object with the message from the API response
    return { 
      error: error.response?.data?.message || "Login failed", 
      statusCode: error.response?.status || 500 
    };
  }
}


//creator register
  //step 1: user register onClick next
  //step 2: creator register and redirect to login
export async function registerCreator(input:TCreatorRegister) {
  try {
  const session = await auth();
  const user = session?.user;

  if(user?.isCreator){
    throw new Error("You are already a creator. Please login to continue")
  }

  const { title, description, website, social_link, expertise, bank_account, avatar} = input

    const response = await axios.post(`${process.env.BASE_API_URL}/api/v1/user-auth/login`,{title, description, website, social_link, expertise, bank_account, avatar});
    const data = response.data;
    console.log("data in registerUser>>>>>>>>>>", data);

    return {data};

  } catch (error: any) {
    console.error("error in registerUser>>>>>>>>:", error.response?.data);

    // Return error object with the message from the API response
    return { 
      error: error.response?.data?.message || "Login failed", 
      statusCode: error.response?.status || 500 
    };
  }
}








export async function handleSignOut() {
  cookies().delete('user')
  await signOut();
}