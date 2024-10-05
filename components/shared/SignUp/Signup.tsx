"use client";
import React, { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { expertiseOptions, FACEBOOK_PNG, GOOGLE_PNG, INSTAGRAM_PNG } from "@/constants/data";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { setIsLoggedIn } from "@/utils/authSlice";
import { setCookie } from "cookies-next";
import { RootState } from "@/Store/store";
import { setIsCreatorLoggedIn } from "@/utils/creatorSlice";
import { toggleLoginType } from "@/utils/loginTypeSlice";
import useFormErrors from "@/hooks/useFormErrors";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // shadcn tabs
import { FancySelect } from "@/components/Reusable Components/FancySelect";

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
          defaultValue={isCreatorLogin ? "creator" : "signup"}
          onValueChange={handleTabChange}
          className="mb-6"
        >
          <TabsList className="grid w-full grid-cols-2">
            {/* SignUp Tab */}
            <TabsTrigger
              value="signup"
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
        </Tabs>

        <form onSubmit={handleSubmit(onSubmit)} className="mx-6">
          {/* Show this section only if extra fields are not displayed */}
          {!showCreatorExtraFields && (
            <>
              <label className="block text-md py-2 font-semibold">
                Username*
              </label>
              <input
                type="text"
                {...register("username", { required: "Username is required" })}
                className="mb-2 h-12 w-full rounded-lg border-2 border-black px-5 text-sm placeholder-gray-400"
                placeholder="Enter your username"
              />
              {getErrorMessage("username") && (
                <p className="text-red-500 text-sm">
                  {getErrorMessage("username")}
                </p>
              )}

              <label className="block text-md py-2 font-semibold">Email*</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="mb-2 h-12 w-full rounded-lg border-2 border-black px-5 text-sm placeholder-gray-400"
                placeholder="Enter your email"
              />
              {getErrorMessage("email") && (
                <p className="text-red-500 text-sm">
                  {getErrorMessage("email")}
                </p>
              )}

              <label className="block text-md py-2 font-semibold">
                Password*
              </label>
              <div className="relative mb-4">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                  className="h-12 w-full rounded-lg border-2 border-black px-5 text-sm placeholder-gray-400"
                  placeholder="Set your Password"
                />
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
              {getErrorMessage("password") && (
                <p className="text-red-500 text-sm">
                  {getErrorMessage("password")}
                </p>
              )}

              <label className="block text-md py-2 font-semibold">
                Confirm Password*
              </label>
              <div className="relative mb-2">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                  className="h-12 w-full rounded-lg border-2 border-black px-5 text-sm placeholder-gray-400"
                  placeholder="Confirm password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 transform"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <FaRegEye className="text-xl" />
                  ) : (
                    <FaRegEyeSlash className="text-xl" />
                  )}
                </button>
              </div>
              {getErrorMessage("confirmPassword") && (
                <p className="text-red-500 text-sm">
                  {getErrorMessage("confirmPassword")}
                </p>
              )}

              {/* Referral Code Section */}
              <label className="block text-md py-2 font-semibold">
                Do you have a referral code?
              </label>
              <div className="flex items-center space-x-4 mb-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="yes"
                    checked={hasReferralCode === true}
                    onChange={() => setHasReferralCode(true)}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="no"
                    checked={hasReferralCode === false}
                    onChange={() => setHasReferralCode(false)}
                    className="mr-2"
                  />
                  No
                </label>
              </div>

              {hasReferralCode && (
                <div>
                  <label className="block text-md py-2 font-semibold">
                    Referral Code
                  </label>
                  <input
                    type="text"
                    {...register("referralCode")}
                    className="mb-2 h-12 w-full rounded-lg border-2 border-black px-5 text-sm placeholder-gray-400"
                    placeholder="Enter referral code"
                  />
                </div>
              )}

<p className="text-xs text-gray-400 mx-1">
            By tapping 'Register' you are agreeing to the{" "}
            <span className="underline cursor-pointer">Terms of Service</span>{" "}
            and <span className="underline cursor-pointer">Privacy Policy</span>
          </p>

              {/* Next Button */}
              {isCreatorLogin && (
                <button
                  type="button"
                  onClick={() => setShowCreatorExtraFields(true)}
                  className="w-full font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 transition duration-300 ease-in-out py-3 rounded-lg mt-6"
                >
                  Next
                </button>
              )}
            </>
          )}

          {/* Show extra fields when Next is clicked */}
          {showCreatorExtraFields && (
            <>
              <div className="mt-4">
                <label className="block text-md py-2 font-semibold">
                  Title*
                </label>
                <input
                  type="text"
                  {...register("title", { required: "Title is required" })}
                  className="mb-2 h-12 w-full rounded-lg border-2 border-black px-5 text-sm placeholder-gray-400"
                  placeholder="Enter your title"
                />
                {getErrorMessage("title") && (
                  <p className="text-red-500 text-sm">
                    {getErrorMessage("title")}
                  </p>
                )}

                <label className="block text-md py-2 font-semibold">
                  Description*
                </label>
                <textarea
                  {...register("description", {
                    required: "Description is required",
                  })}
                  className="mb-2 h-24 w-full rounded-lg border-2 py-3 border-black px-5 text-sm placeholder-gray-400"
                  placeholder="Enter a brief description"
                />
                {getErrorMessage("description") && (
                  <p className="text-red-500 text-sm">
                    {getErrorMessage("description")}
                  </p>
                )}

                <label className="block text-md py-2 font-semibold">
                  Website
                </label>
                <input
                  type="text"
                  {...register("website")}
                  className="mb-2 h-12 w-full rounded-lg border-2 border-black px-5 text-sm placeholder-gray-400"
                  placeholder="Enter your website"
                />

                <label className="block text-md py-2 font-semibold">
                  Avatar
                </label>
                <input
                  type="text"
                  {...register("avatar")}
                  className="mb-2 h-12 w-full rounded-lg border-2 border-black px-5 text-sm placeholder-gray-400"
                  placeholder="Enter your avatar URL"
                />

                <label className="block text-md py-2 font-semibold">
                  Expertise*
                </label>
                <FancySelect
                  options={expertiseOptions}
                  placeholder="Select your expertise"
                  onChange={(selected) =>
                    console.log("Selected Expertise:", selected)
                  }
                />
                <button
                  type="submit"
                  className="w-full font-bold  bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 transition duration-300 ease-in-out py-3 rounded-lg mt-6"
                >
                  Signup as Creator
                </button>
              </div>
            </>
          )}

          {!isCreatorLogin && (
            <button
              type="submit"
              className="w-full font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 transition duration-300 ease-in-out py-3 rounded-lg mt-6"
            >
              Create Account
            </button>
          )}

          
        </form>

        <div className="flex justify-center mt-4">
          <p className="text-sm">Already have an account?&nbsp;</p>
          <Link href="/auth/signin">
            <p className="text-sm text-yellow-500 underline cursor-pointer">
              Log in
            </p>
          </Link>
        </div>

        <div className="flex items-center justify-center my-4 w-full">
            <div className="h-px w-full bg-black"></div>
            <span className="px-3">or</span>
            <div className="h-px w-full bg-black"></div>
          </div>

        <div className="flex gap-10 items-center justify-center cursor-pointer">
          <img className="w-12 h-12" src={FACEBOOK_PNG} alt="Facebook" />
          <img className="w-9 h-9" src={GOOGLE_PNG} alt="Google" />
          <img className="w-9 h-9" src={INSTAGRAM_PNG} alt="Instagram" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
