"use client";

import type React from "react";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Apple, Mail, Facebook, EyeOff, Eye } from "lucide-react";
import Link from "next/link";
import { useFormik } from "formik";
import ApiService from "@/helpers/api/Index";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { isDemoMode } from "@/helpers/utils/utils";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Please enter a valid email address.")
    .required("Email address is required."),
  password: Yup.string().trim().required("Password is required."),
});

type SigninFormProps = React.ComponentProps<"div"> & {};

export function SigninForm({ ...props }: SigninFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const {
    values,
    isSubmitting,
    errors,
    touched,
    handleBlur,
    isValid,
    dirty,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        if (isDemoMode()) {
          const validEmail = process.env.NEXT_PUBLIC_LOGINUSERNAME;
          const validPass = process.env.NEXT_PUBLIC_LOGINPASSWORD;

          if (values.email !== validEmail || values.password !== validPass) {
            toast.error("Invalid username or password");
            return;
          }

          router.push("/dashboard");
          return;
        }

        // NORMAL MODE → API LOGIN FLOW
        const response = await ApiService.SignIn({ Login: values });

        if (!response.success) {
          toast.error(response.message);
          return;
        }

        router.push("/dashboard");
      } catch (error) {
        console.error("Login failed:", error);
        toast.error("Something went wrong.");
      }
    },
  });
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-50 p-4"
      {...props}
    >
      <div className="w-full max-w-4xl">
        <Card className="overflow-hidden shadow-xl border-0 bg-white">
          <CardContent className="grid p-0 md:grid-cols-2">
            {/* Left side - Form */}
            <div className="p-8 md:p-12 bg-white">
              <div className="space-y-8">
                {/* Header */}
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl mx-auto flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    Welcome back
                  </h1>
                  <p className="text-gray-600">
                    Sign in to your account to continue
                  </p>
                </div>

                {/* Form */}
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      autoComplete="email"
                      className={`h-12 px-4 border-gray-300 focus:border-green-500 focus:ring-green-500 ${
                        touched.email && errors.email ? "border-red-500" : ""
                      }`}
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.email && errors.email && (
                      <div className="text-red-600 text-xs mt-1">
                        {errors.email}
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label
                        htmlFor="password"
                        className="text-sm font-medium text-gray-700"
                      >
                        Password
                      </Label>
                      <Link
                        href="/forgot-password"
                        className="text-sm text-green-600 hover:text-green-700 font-medium"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        required
                        autoComplete="current-password"
                        className={`h-12 px-4 border-gray-300 focus:border-green-500 focus:ring-green-500 ${
                          touched.password && errors.password
                            ? "border-red-500"
                            : ""
                        }`}
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    {touched.password && errors.password && (
                      <div className="text-red-600 text-xs mt-1">
                        {errors.password}
                      </div>
                    )}
                  </div>
                  {/* <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                                                Password
                                            </Label>
                                            <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                                                Forgot password?
                                            </a>
                                        </div>
                                        <div className="relative">
                                            <Input
                                                id="password"
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Enter your password"
                                                required
                                                className="h-12 px-4 pr-12 border-gray-300 focus:border- blue-500 focus:ring-blue-500"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                                            >
                                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                            </button>
                                        </div>
                                    </div> */}

                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                    disabled={isSubmitting || !isValid || !dirty}
                  >
                    {isSubmitting ? "Signing In..." : "Sign In"}
                  </Button>
                </form>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>

                {/* Social Login */}
                <div className="grid grid-cols-3 gap-3">
                  <Button
                    variant="outline"
                    className="h-12 border-gray-300 hover:bg-gray-50 bg-white"
                  >
                    <Apple className="w-5 h-5 text-gray-600" />
                    <span className="sr-only">Continue with Apple</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-12 border-gray-300 hover:bg-gray-50 bg-white"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                        fill="currentColor"
                        className="text-gray-600"
                      />
                    </svg>
                    <span className="sr-only">Continue with Google</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-12 border-gray-300 hover:bg-gray-50 bg-white"
                  >
                    <Facebook className="w-5 h-5 text-gray-600" />
                    <span className="sr-only">Continue with Facebook</span>
                  </Button>
                </div>

                {/* Sign up link */}
                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Don&apos;t have an account?{" "}
                    <Link
                      href="/sign-up"
                      className="font-semibold text-green-600 hover:text-green-700"
                    >
                      Create account
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Branding */}
            <div className="relative bg-gradient-to-br from-green-600  via-blue-600 to-teal-700 hidden md:flex">
              <div className="flex flex-col justify-center items-center p-12 text-white relative z-10">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-8">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold">Join our community</h2>
                  <p className="text-lg text-white/90 max-w-sm">
                    Connect with thousands of users and unlock amazing features
                    designed just for you.
                  </p>
                  <div className="flex items-center justify-center space-x-2 pt-4">
                    <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
            </div>
          </CardContent>
        </Card>

        {/* Terms */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-500">
            By signing in, you agree to our{" "}
            <a href="#" className="underline hover:text-gray-700">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline hover:text-gray-700">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
