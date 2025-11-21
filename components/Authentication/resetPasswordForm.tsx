"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, Eye, EyeOff, CheckCircle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function ResetPasswordForm({ ...props }: React.ComponentProps<"div">) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    Reset Password
                  </h1>
                  <p className="text-gray-600">
                    Create a new secure password for your account
                  </p>
                </div>

                {/* Form */}
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="password"
                      className="text-sm font-medium text-gray-700"
                    >
                      New Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter new password"
                        required
                        className="h-12 px-4 border-gray-300 focus:border-green-500 focus:ring-green-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="confirmPassword"
                      className="text-sm font-medium text-gray-700"
                    >
                      Confirm New Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm new password"
                        required
                        className="h-12 px-4 border-gray-300 focus:border-green-500 focus:ring-green-500"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Password requirements */}
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-3">
                      Password requirements:
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">
                          At least 8 characters long
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">
                          Contains uppercase and lowercase letters
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">
                          Contains at least one number
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">
                          Contains special character
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    Reset Password
                  </Button>
                </form>

                {/* Sign in link */}
                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Remember your password?{" "}
                    <Link
                      href="/"
                      className="font-semibold text-green-600 hover:text-green-700"
                    >
                      Sign in
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
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold">Enhanced Security</h2>
                  <p className="text-lg text-white/90 max-w-sm">
                    Your new password will keep your account safe and secure
                    from unauthorized access.
                  </p>
                  <div className="flex items-center justify-center space-x-2 pt-4">
                    <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
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
