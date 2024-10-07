"use client";
import React, { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Link from "next/link";
import {
  expertiseOptions,
  FACEBOOK_PNG,
  GOOGLE_PNG,
  INSTAGRAM_PNG,
} from "@/constants/data";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { setIsLoggedIn } from "@/utils/authSlice";
import { setCookie } from "cookies-next";
import { RootState } from "@/Store/store";
import { setIsCreatorLoggedIn } from "@/utils/creatorSlice";
import { toggleLoginType } from "@/utils/loginTypeSlice";
import useFormErrors from "@/hooks/useFormErrors";
import { FancySelect } from "@/components/Reusable Components/FancySelect";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserRegisterForm from "../auth/signup/UserRegisterForm";
import NextForm from "../auth/signup/NextForm";
import CreatorRegisterForm from "../auth/signup/CreatorRegisterForm";

const SignUp = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [hasReferralCode, setHasReferralCode] = useState(false);
  const [showCreatorExtraFields, setShowCreatorExtraFields] = useState(false); // State for showing extra fields
  const isCreatorLogin = useSelector(
    (store: RootState) => store.loginType.isCreatorLogin
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm();

  const { getErrorMessage } = useFormErrors(errors);
  const password = watch("password");

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!isCreatorLogin) {
      setCookie("user", JSON.stringify({ email: data.email }), {
        path: "/",
        maxAge: 30 * 24 * 60 * 60,
      });
      dispatch(setIsLoggedIn(true));
      router.push("/"); // Redirect to / for users
      reset();
    } else {
      setCookie("creator", JSON.stringify({ email: data.email }), {
        path: "/",
        maxAge: 30 * 24 * 60 * 60,
      });
      dispatch(setIsCreatorLoggedIn(true));
      router.push("/explore"); // Redirect to /explore for creators
      reset();
    }
  };

  const handleTabChange = (tabValue: string) => {
    if (tabValue === "creator") {
      dispatch(toggleLoginType()); // Toggle signup type to creator
    } else {
      dispatch(toggleLoginType()); // Toggle signup type to user
    }
    setShowCreatorExtraFields(false); // Reset extra fields when switching tabs
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-secondary overflow-hidden">
      <div className="w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-lg bg-white p-5">
        <Tabs
          defaultValue={isCreatorLogin ? "creator" : "user"}
          onValueChange={handleTabChange}
          className="mb-6"
        >
          <TabsList className="grid w-full grid-cols-2">
            {/* SignUp Tab */}
            <TabsTrigger
              value="user"
              className={`text-center py-2 px-4 font-semibold transition-colors duration-200 ${
                !isCreatorLogin
                  ? "text-yellow-500 border-b-4 border-yellow-500"
                  : "text-black hover:text-yellow-500 hover:border-b-4 border-transparent"
              }`}
            >
              Create Your Account
            </TabsTrigger>

            {/* SignUp as Creator Tab */}
            <TabsTrigger
              value="creator"
              className={`text-center py-2 px-4 font-semibold transition-colors duration-200 ${
                isCreatorLogin
                  ? "text-yellow-500 border-b-4 border-yellow-500"
                  : "text-black hover:text-yellow-500 hover:border-b-4 border-transparent"
              }`}
            >
              Signup as Creator
            </TabsTrigger>
          </TabsList>

          <TabsContent value="user">

              <UserRegisterForm/>
          </TabsContent>
          <TabsContent value="creator">
          {!showCreatorExtraFields ? <NextForm setShowCreatorExtraFields={setShowCreatorExtraFields}/> : <CreatorRegisterForm/>}

          </TabsContent>
        </Tabs>

        {/* <div className="flex justify-center mt-4">
          <p className="text-sm">Already have an account?&nbsp;</p>
          <Link href="/auth/signin">
            <p className="text-sm text-yellow-500 underline cursor-pointer">
              Log in
            </p>
          </Link>
        </div> */}

        {/* <div className="flex items-center justify-center my-4 w-full">
            <div className="h-px w-full bg-black"></div>
            <span className="px-3">or</span>
            <div className="h-px w-full bg-black"></div>
          </div> */}
        {/* 
        <div className="flex gap-10 items-center justify-center cursor-pointer">
          <img className="w-12 h-12" src={FACEBOOK_PNG} alt="Facebook" />
          <img className="w-9 h-9" src={GOOGLE_PNG} alt="Google" />
          <img className="w-9 h-9" src={INSTAGRAM_PNG} alt="Instagram" />

        </div> */}
      </div>
    </div>
  );
};

export default SignUp;
