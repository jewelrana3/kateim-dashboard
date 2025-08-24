"use client";
import { Bell } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const auth = [
  { path: "/login" },
  { path: "/forgot-password" },
  { path: "/new-password" },
  { path: "/verify-otp" },
];

const path = [
  // { path: "/", label: "Dashboard" },
  // { path: "/all-employe-list", label: "All Employer" },
  // { path: "/all-worker", label: "All Worker" },
  // { path: "/all-category", label: "All Category" },
  // { path: "/home-page", label: "Home Page" },
  // { path: "/about-us", label: "About Us" },
  // { path: "/contact-us", label: "Contact Us" },
  // { path: "/credit-list", label: "Credit List" },
  // { path: "/change-password", label: "Change Password" },
  // { path: "/terms-condition", label: "Terms & Condition" },
  // { path: "/our-clients", label: "Our Cllients" },
  // { path: "/support", label: "Support" },
  // { path: "/faq", label: "FAQ" },
  // { path: "/verify-request", label: "Verify Request" },
  { path: "/profile", label: "Profile" },
  { path: "/notification", label: "Notification" },
];

export default function Header() {
  const pathname = usePathname();
  const isAuthPage = auth.some((item) => item.path === pathname);
  const activePath = path.find((item) => item.path === pathname);
  return (
    <>
      {!isAuthPage && (
        <section className="flex items-center justify-between bg-white text-black p-4 z-50">
          <p>{activePath?.label}</p>
          <div className="flex items-center gap-4">
            <div className="relative bg-gray-100 p-2 rounded-full">
              <Link href="/notification">
                <Bell className="w-5 h-5 text-black" />
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-semibold">
                  3
                </span>
              </Link>
            </div>

            <Link href="/profile">
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
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
