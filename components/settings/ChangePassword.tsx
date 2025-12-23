"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useChangePassword } from "@/lib/query/hooks";
import { toast } from "react-toastify";

export default function ChangePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const { mutate: changePassword, isPending } = useChangePassword();

  const toggleVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate passwords match
    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("New password and confirm password do not match!");
      return;
    }

    // Validate password length
    if (formData.newPassword.length < 6) {
      toast.error("New password must be at least 6 characters long!");
      return;
    }

    // Call the API
    changePassword(formData, {
      onSuccess: () => {
        // Reset form on success
        setFormData({
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      },
    });
  };

  return (
    <div
      className=" flex items-center justify-center bg-[#F6F6F6] px-4 mb-5"
      style={{ height: "calc(100vh - 120px)" }}
    >
      <div className="min-w-md w-[50%] mx-auto bg-white p-8 rounded-md shadow-md space-y-6 ">
        <h2 className="text-center text-2xl font-semibold">Change Password</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            {
              label: "Current Password",
              name: "currentPassword",
              placeholder: "Enter Current Password",
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
                  required
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
          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-yellow-400 text-black font-semibold py-2 rounded cursor-pointer hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? "Changing..." : "Confirm"}
          </button>
        </form>
      </div>
    </div>
  );
}
