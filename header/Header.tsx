"use client";
import { Bell } from "lucide-react";
import { usePathname } from "next/navigation";

const auth = [
  { path: "/login" },
  { path: "/forgot-password" },
  { path: "/new-password" },
  { path: "/verify-otp" },
];

export default function Header() {
  const pathname = usePathname();
  const isAuthPage = auth.some((item) => item.path === pathname);
  return (
    <>
      {!isAuthPage && (
        <section className="flex items-center justify-between bg-white text-black p-4 shadow-md">
          <div className="text-[#0057DC] text-xl">Instantlabour</div>
          <div className="flex items-center gap-4">
            <div className="relative bg-gray-100 p-2 rounded-full">
              <Bell className="w-5 h-5 text-black" />
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-semibold">
                3
              </span>
            </div>

            <div className="flex items-center gap-2">
              <img
                src="https://i.ibb.co.com/xJdQCTG/download.jpgg"
                alt="User Avatar"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="text-sm leading-tight ">
                <p className="font-medium">Katiem</p>
                <p className=" text-xs">Admin</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
