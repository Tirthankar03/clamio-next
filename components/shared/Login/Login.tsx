'use client';
import React, { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FACEBOOK_PNG, GOOGLE_PNG, INSTAGRAM_PNG } from "@/constants/data";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setIsLoggedIn } from "@/utils/authSlice";
import { setCookie } from "cookies-next";
import useFormErrors from "@/hooks/useFormErrors";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const { getErrorMessage } = useFormErrors(errors);

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setCookie("user", JSON.stringify({ email: data.email }), {
      path: "/",
      maxAge: 30 * 24 * 60 * 60,
    });
    dispatch(setIsLoggedIn(true));
    router.push("/"); // Redirect to home page
    reset();
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-secondary overflow-hidden">
      <div className="w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-lg bg-white p-5">
        
        {/* Login Heading */}
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="mx-6">
          <label className="block text-md py-2 font-semibold">Email*</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="mb-2 h-12 w-full rounded-lg border-2 border-black px-5 text-sm placeholder-gray-400"
            placeholder="Enter your email"
          />
          {getErrorMessage("email") && (
            <p className="text-red-500 text-sm">{getErrorMessage("email")}</p>
          )}

          <label className="block text-md py-2 font-semibold">Password*</label>
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
            <p className="text-red-500 text-sm">{getErrorMessage("password")}</p>
          )}

          <p className="cursor-pointer text-xs text-gray-400 underline text-right">
            Forgot Password?
          </p>

          <button
            disabled={isSubmitting}
            type="submit"
            className="mt-5 h-12 w-full rounded-md bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 transition duration-300 ease-in-out text-center font-bold shadow-sm disabled:bg-gray-500"
          >
            LOGIN NOW
          </button>
          <p className="py-2 font-semibold text-sm text-center">
            Don't have an account?{" "}
            <Link href="/signup">
              <span className="cursor-pointer underline">Register Now</span>
            </Link>
          </p>

          <div className="flex items-center justify-center my-4">
            <div className="h-px w-full bg-black"></div>
            <span className="px-3">or</span>
            <div className="h-px w-full bg-black"></div>
          </div>
        </form>

        <div className="flex gap-10 items-center justify-center cursor-pointer">
          <img className="w-12 h-12" src={FACEBOOK_PNG} alt="Facebook" />
          <img className="w-12 h-12" src={GOOGLE_PNG} alt="Google" />
          <img className="w-9 h-9" src={INSTAGRAM_PNG} alt="Instagram" />
        </div>
      </div>
    </div>
  );
};

export default Login;
