"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

export default function OtpVerification() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(59);

  useEffect(() => {
    if (timer === 0) return;
    const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(countdown);
  }, [timer]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const val = e.target.value;
    if (/^\d?$/.test(val)) {
      const newOtp = [...otp];
      newOtp[idx] = val;
      setOtp(newOtp);

      if (val && idx < otp.length - 1) {
        const nextInput = document.getElementById(`otp-${idx + 1}`);
        nextInput?.focus();
      }
    }
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

      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg text-center">
        <h2 className="text-2xl font-semibold">Verify Your Account</h2>
        <p className="text-sm text-[#545454] my-2">
          We’ve sent a One-Time Password (OTP) to your email/phone. Please enter
          the code below to continue.
        </p>
        <div className="flex justify-center gap-2">
          {otp.map((num, idx) => (
            <input
              key={idx}
              id={`otp-${idx}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              className="w-10 h-12 text-center text-lg font-medium bg-[#FEF6E7]"
              value={num}
              onChange={(e) => handleChange(e, idx)}
            />
          ))}
        </div>

        <p className="text-sm text-gray-700 my-4">
          Resent in 0:{timer < 10 ? `0${timer}` : timer}
        </p>

        <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
          Continue
        </Button>
      </div>
    </div>
  );
}
