"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function ChangePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const toggleVisibility = () => setShowPassword(!showPassword);

  return (
    <div
      className=" flex items-center justify-center bg-[#F6F6F6] px-4 mb-5"
      style={{ height: "calc(100vh - 120px)" }}
    >
      <div className="min-w-md w-[50%] mx-auto bg-white p-8 rounded-md shadow-md space-y-6 ">
        <h2 className="text-center text-2xl font-semibold">Change Password</h2>

        {[
          {
            label: "Old Password",
            name: "oldPassword",
            placeholder: "Enter Old Password",
          },
          {
            label: "New Password",
            name: "newPassword",
            placeholder: "Enter New Password",
          },
          {
            label: "Confirm New Password",
            name: "confirmPassword",
            placeholder: "Confirm New Password",
          },
        ].map(({ label, name, placeholder }) => (
          <div key={name}>
            <label className="block text-sm font-medium mb-1">{label}</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name={name}
                placeholder={placeholder}
                value={formData[name as keyof typeof formData]}
                onChange={(e) =>
                  setFormData({ ...formData, [name]: e.target.value })
                }
                className="w-full px-4 py-2 rounded border bg-orange-50 focus:outline-none"
              />
              <button
                type="button"
                onClick={toggleVisibility}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        ))}

        {/* Confirm Button */}
        <button className="w-full bg-yellow-400  text-black font-semibold py-2 rounded cursor-pointer">
          Confirm
        </button>
      </div>
    </div>
  );
}
