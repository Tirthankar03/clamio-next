"use client";

import React, { useState, useTransition } from "react";
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
import { login, registerCreator, registerUser } from "@/action/auth";

import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";

import { CreatorRegisterSchema, UserRegisterSchema } from "@/schemas";
import { FormError } from "@/components/shared/form-error";

const CreatorRegisterForm = () => {
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState<File | null>(null); // Manage the file separately
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof CreatorRegisterSchema>>({
    resolver: zodResolver(CreatorRegisterSchema),
    defaultValues: {
      title: "",
      description: ""
    //   bank_account: 0
    },
  });

  const onSubmit = async (values: z.infer<typeof CreatorRegisterSchema>) => {
    startTransition(async () => {
      const formData = new FormData();
  
      // Append regular fields to FormData
      formData.append("title", values.title);
      formData.append("description", values.description);
      formData.append("website", values.website || "");
      formData.append("social_link", values.social_link);
      //⚠️⚠️⚠️⚠️⚠️append single select result. Hardcoding for now 
      formData.append("expertise", values.expertise);
      formData.append("bank_account", "67586758");

    


  // Append the avatar file if it exists
  if (avatar) {
    formData.append("avatar", avatar);
  }
      // Call the server action and pass the FormData
      const result = await registerCreator(formData);

      console.log("result in registerCreator>>>>>>>>>>>>", result)
  
      if (result.success) {
        // Show success message or handle success logic
        toast.success(result.message)
        dispatch(setIsLoggedIn(true))
      } else {
        setError(result.message);
      }
    });
  };
  

  return (
    // <div className="flex items-center justify-center h-screen w-screen bg-secondary overflow-hidden">
    <div className="rounded-lg bg-white p-5">
      <h2 className="text-2xl font-bold text-center mb-6">Creator Register</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mx-6 space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title*</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your title"
                    {...field}
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

            {/* <FormField
            control={form.control}
            name="avatar"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Avatar*</FormLabel>
                <FormControl>
                    <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                        field.onChange(file); // Manually update the form state with the file
                        }
                    }}
                    disabled={isPending}
                    />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            /> */}

              {/* Avatar upload using standard input */}
        <div>
          <label>Avatar*</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setAvatar(file); // Update avatar state with selected file
              }
            }}
            disabled={isPending}
          />
        </div>


          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description*</FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your description"
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

            <FormField
            control={form.control}
            name="expertise"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Expertise*</FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your expertise"
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
{/* 
          <FormField
            control={form.control}
            name="bank_account"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bank A/C*</FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter valid bank A/C no...."
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          /> */}

          <FormField
            control={form.control}
            name="social_link"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Social Link</FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your social link"
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Personal Website (if any)</FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="your link..."
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <p className="cursor-pointer text-xs text-gray-400 underline text-right">
            Forgot Password?
          </p>

          <FormError message={error} />
          <Button
            disabled={isPending}
            isLoading={isPending}
            loadingText=" "
            type="submit"
            className="mt-5 h-12 w-full rounded-md bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 transition duration-300 ease-in-out text-center font-bold shadow-sm disabled:bg-gray-500"
          >
            REGISTER
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

export default CreatorRegisterForm;
