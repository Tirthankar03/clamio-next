import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { LoginSchema } from "./schemas";
import { credentialLogin } from "./action/auth";
import { AxiosError } from "axios";
import { cookies } from "next/headers";
import { getUserById } from "./lib/getRoutes/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // google,

    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    Credentials({
      name: "Credentials",

      // credentials: {
      //   email: { label: "Email", type: "email" },
      //   password: { label: "Password", type: "password" },
      // },

      authorize: async (credentials) => {
        // const email = credentials.email as string | undefined;
        // const password = credentials.password as string | undefined;

        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          //api call to the backend
          const { data, userCookie, error }  = await credentialLogin({email,password})

          // console.log('data in authorize>>>>>>>>>', data);
          // console.log('data.error? in authorize>>>>>>>>>', data.error);


          //this function doesn't even run if the error falls in the catch block???????
          if(error) return null


          //manually setting the user cookie
          if (userCookie) {
            cookies().set('user', userCookie.split(';')[0].split('=')[1], {
              path: '/',
              httpOnly: true,
              secure: process.env.NODE_ENV === 'production',
            });
          }

          console.log("data.user>>>>>>>")

          return data.user //return null to throw error, return something to allow the user to login. The logic is yours

        
        }

        return null; // if the validation doesn't work
      },
    }),
  ],

  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },

  callbacks: {
    async session({ session, token }) {
      if (token?.sub) {
        session.user.id = token.sub;
        session.user.role = token.role;
        session.user.isCreator = token.isCreator;
      }
      // console.log('session in jwt>>>>>>>>>>>>>>',session);

      return session;
    },

    async jwt({ token, user }) {
        if(!token.sub) return token
        const existingUser = await getUserById(token.sub);

        // console.log("get user by id in the jwt session>>>>>>>>>>>>>", existingUser)
        if (!existingUser) return token;
        token.isCreator = !!existingUser.creator;
      return token;
    },

    signIn: async ({ user, account }) => {
      if (account?.provider === "google") {
        /*
        payload: {email, name, image, id}
        will make an api call to a route that does the following:
          -checks for existing user
          -if not, create a new user => also add the authProviderId from payload
          -return response
        */

        try {
          console.log(
            "this is user in the google provider>>>>>>>>>>>>>>>>",
            user
          );
          console.log(
            "this is account in the google provider>>>>>>>>>>>>>>>>",
            account
          );

          const { email, name, image, id } = user;
          // await connectDB();
          // const existingUser = await User.findOne({ email });

          //if not existing user, create a new user
          // if (!existingUser) {
          //   const newUser = await User.create({
          //     email,
          //     name,
          //     image,
          //     authProviderId: id,
          //   });
          //   console.log("new user created successfully>>>>>>", newUser);
          //   return true;
          // }

          return true;
        } catch (error) {
          console.error("error in creating user>>>>>>>", error);

          throw new Error("Error while creating user");
        }
      }

      if (account?.provider === "credentials") {
        return true;
      } else {
        return false;
      }
    },
  },
});
