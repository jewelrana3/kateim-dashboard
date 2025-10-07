"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function page() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
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
        <h3 className="text-center font-medium text-3xl mb-4">
          Forgot Password
        </h3>
        <p className="text-gray-500">
          Enter your email address to get a verification code for resetting your
          password.
        </p>

        <form className="space-y-5 mt-6" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="email" className="block text-md mb-1">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter Your Email"
              className="w-full rounded-md px-3 h-11 bg-[#FEF6E7] border-none"
            />
          </div>

          <Link href="/verify-otp">
            <button
              type="submit"
              className="w-full bg-[#FFC823] text-black font-semibold py-2 cursor-pointer"
            >
              Continue
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
