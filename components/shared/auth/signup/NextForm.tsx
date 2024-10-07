'use client';

import React, { SetStateAction, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FACEBOOK_PNG, GOOGLE_PNG, INSTAGRAM_PNG } from "@/constants/data";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setIsLoggedIn } from "@/utils/authSlice";
import { setCookie } from "cookies-next";
import useFormErrors from "@/hooks/useFormErrors";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login, registerUser } from "@/action/auth";

import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query"
import { FormError } from "../../form-error";
import { UserRegisterSchema } from "@/schemas";
import { Dispatch } from "redux";


const NextForm = ({setShowCreatorExtraFields}: {setShowCreatorExtraFields: any}) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();


  const form = useForm<z.infer<typeof UserRegisterSchema>>({
    resolver: zodResolver(UserRegisterSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof UserRegisterSchema>) => {
    startTransition(async () => {
     const result = await registerUser(values);


     if(result.success){
    //   toast.success(result.message)
        const resultLogin = await login(values)
        if(resultLogin.success){
            setShowCreatorExtraFields(true)
        }else{
            setError(result.message)
        }
     }else{
      setError(result.message)
     }


    })
  };

  return (
    // <div className="flex items-center justify-center h-screen w-screen bg-secondary overflow-hidden">
      <div className="rounded-lg bg-white p-5">
        <h2 className="text-2xl font-bold text-center mb-6">Creator Register</h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mx-6 space-y-4">
          <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your username"
                      {...field}
                      disabled={isPending} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email*</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                      disabled={isPending} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password*</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Set your password"
                        {...field}
                        disabled={isPending} 
                      />
                    </FormControl>
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 transform"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FaRegEye className="text-xl" />
                      ) : (
                        <FaRegEyeSlash className="text-xl" />
                      )}
                    </button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <p className="cursor-pointer text-xs text-gray-400 underline text-right">
              Forgot Password?
            </p>


            <FormError message={error}/>
            <Button
              disabled={isPending} 
              isLoading={isPending}
              loadingText=" "
              type="submit"
              className="mt-5 h-12 w-full rounded-md bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 transition duration-300 ease-in-out text-center font-bold shadow-sm disabled:bg-gray-500"
            >
              NEXT
            </Button>
            <p className="py-2 font-semibold text-sm text-center">
              Already have a account?{" "}
              <Link href="/auth/signin">
                <span className="cursor-pointer underline">Sign in</span>
              </Link>
            </p>

            <div className="flex items-center justify-center my-4">
              <div className="h-px w-full bg-black"></div>
              <span className="px-3">or</span>
              <div className="h-px w-full bg-black"></div>
            </div>
          </form>
        </Form>

        <div className="flex gap-10 items-center justify-center cursor-pointer">
          <img className="w-12 h-12" src={FACEBOOK_PNG} alt="Facebook" />
          <img className="w-12 h-12" src={GOOGLE_PNG} alt="Google" />
          <img className="w-9 h-9" src={INSTAGRAM_PNG} alt="Instagram" />
        </div>
      </div>
    // </div>
  );
};

export default NextForm;
