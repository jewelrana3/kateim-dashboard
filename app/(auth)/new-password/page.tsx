"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function page() {
  const [password, setPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  return (
    <div className="relative min-h-screen bg-gray-50 flex items-center justify-center">
      {/* Background shapes */}
      <div
        className="absolute top-0 right-0 w-40 h-40 bg-purple-200 rounded-bl-full opacity-30 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-0 left-0 w-40 h-40 bg-purple-200 rounded-tr-full opacity-30 pointer-events-none"
        aria-hidden="true"
      ></div>

      {/* Login card */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h3 className="text-center font-medium text-3xl mb-6">New Password</h3>

        <form className="space-y-5">
          <Label htmlFor="password" className="block text-md mb-1">
            Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={password ? "password" : "text"}
              placeholder="Enter Your Password"
              className="w-full rounded-md px-3 h-11  bg-[#FEF6E7] border-none"
            />
            <span
              className="absolute top-3 right-4 cursor-pointer"
              onClick={() => setPassword(!password)}
            >
              {password ? <EyeOff /> : <Eye />}
            </span>
          </div>
          <Label htmlFor="newPassword" className="block text-md mb-1">
            Confirm Password
          </Label>
          <div className="relative">
            <Input
              id="newPassword"
              type={confirmPassword ? "password" : "text"}
              placeholder="Enter Your Password"
              className="w-full rounded-md px-3 h-11  bg-[#FEF6E7] border-none"
            />
            <span
              className="absolute top-3 right-4 cursor-pointer"
              onClick={() => setConfirmPassword(!confirmPassword)}
            >
              {confirmPassword ? <EyeOff /> : <Eye />}
            </span>
          </div>
          <Link href="/login">
            <button
              type="submit"
              className="w-full bg-[#FFC823] text-black font-semibold py-2 cursor-pointer"
            >
              Confirm
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
