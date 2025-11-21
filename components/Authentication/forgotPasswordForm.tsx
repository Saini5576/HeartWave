"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { KeyRound, ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function ForgotPasswordForm({ ...props }: React.ComponentProps<"div">) {
  const router = useRouter();
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
                {/* Back button */}
                <div>
                  <Button
                    onClick={() => {
                      router.push("/");
                    }}
                    variant="ghost"
                    className="p-0 h-auto text-gray-600 hover:text-gray-900 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to login
                  </Button>
                </div>

                {/* Header */}
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl mx-auto flex items-center justify-center">
                    <KeyRound className="w-8 h-8 text-white" />
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    Forgot Password?
                  </h1>
                  <p className="text-gray-600">
                    No worries! Enter your email address and we&apos;ll send you
                    a reset link.
                  </p>
                </div>

                {/* Form */}
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      required
                      className="h-12 px-4 border-gray-300 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    Send Reset Link
                  </Button>
                </form>

                {/* Additional info */}
                <div className="text-center space-y-4">
                  <p className="text-sm text-gray-500">
                    Remember your password?{" "}
                    <Link
                      href="/"
                      className="font-semibold text-green-600 hover:text-green-700"
                    >
                      Sign in
                    </Link>
                  </p>

                  <div
                    style={{ visibility: "hidden" }}
                    className="bg-blue-50 border border-blue-200 rounded-lg p-4"
                  >
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium text-blue-900">
                          Check your email
                        </p>
                        <p className="text-blue-700">
                          A password reset link has been sent to your email
                          address.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Branding */}
            <div className="relative bg-gradient-to-br from-green-600  via-blue-600 to-teal-700 hidden md:flex">
              <div className="flex flex-col justify-center items-center p-12 text-white relative z-10">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-8">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                      <KeyRound className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold">Secure Recovery</h2>
                  <p className="text-lg text-white/90 max-w-sm">
                    Your account security is our priority. We&apos;ll help you
                    regain access safely.
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
      </div>
    </div>
  );
}
