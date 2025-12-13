"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useLogin } from "@/lib/query/hooks";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: login, isPending } = useLogin();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;

    login({ email, password });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
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
        <h2 className="text-center text-blue-600 font-bold text-2xl mb-6">
          Instantlabour
        </h2>
        <h3 className="text-center font-medium text-3xl mb-6">Log In</h3>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="email" className="block text-md mb-1">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter Your Email"
              className="w-full rounded-md px-3 h-11 bg-[#FEF6E7] border-none"
              required
            />
          </div>

          <div>
            <Label htmlFor="password" className="block text-md mb-1">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                className="w-full rounded-md px-3 h-11 bg-[#FEF6E7] border-none"
                required
              />
              <span
                className="absolute top-3 right-4 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </span>
            </div>
          </div>

          <div className="text-right mt-1">
            <a
              href="/forgot-password"
              className="text-sm hover:underline"
            >
              Forgot Password
            </a>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-[#FFC823] text-black font-semibold py-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? "Logging in..." : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
}
