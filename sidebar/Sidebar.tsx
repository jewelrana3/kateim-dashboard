"use client";

import {
  LayoutGrid,
  User,
  List,
  Home,
  Store,
  Calendar,
  Key,
  Shield,
  LogOut,
  Users,
  Phone,
  FileQuestion,
  CheckCheck,
  Podcast,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const sidebarMenu = [
  { id: 1, label: "Overview", icon: LayoutGrid, path: "/" },
  {
    id: 2,
    label: "All Employer List",
    icon: User,
    path: "/all-employe-list",
  },
  {
    id: 3,
    label: "All Worker List",
    icon: User,
    path: "/all-worker",
  },
  { id: 4, label: "All Category", icon: List, path: "/all-category" },
  { id: 5, label: "Home Landing Page", icon: Home, path: "/home-page" },
  { id: 6, label: "About Us Landing Page", icon: Store, path: "/about-us" },

  {
    id: 7,
    label: "Contact Us Landing Page",
    icon: Calendar,
    path: "/contact-us",
  },
  { id: 22, label: "Subscription", icon: Podcast, path: "/subscriptions" },
  // { id: 8, label: "Credit List", icon: CreditCard, path: "/credit-list" },
  { id: 9, label: "Change Password", icon: Key, path: "/change-password" },
  {
    id: 10,
    label: "Terms And Condition",
    icon: Shield,
    path: "/terms-condition",
  },
  {
    id: 17,
    label: "Our Clients",
    icon: Users,
    path: "/our-clients",
  },
  {
    id: 11,
    label: "Contact & Support",
    icon: Phone,
    path: "/support",
  },
  {
    id: 15,
    label: "FAQ",
    icon: FileQuestion,
    path: "/faq",
  },
  {
    id: 12,
    label: "Verify Request",
    icon: CheckCheck,
    path: "/verify-request",
  },
  { id: 13, label: "Log Out", icon: LogOut, path: "/login" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="h-screen overflow-y-scroll no-scrollbar">
      <h1 className="text-[#0057DC] text-xl font-semibold text-center my-5">
        Instantlabour
      </h1>{" "}
      <aside className=" bg-white p-4 space-y-1 text-sm">
        {sidebarMenu.map((item, index) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;
          return (
            <Link key={index} href={item.path} className="">
              <div
                className={`flex items-center gap-3 px-4 my-2 py-2 cursor-pointer ${
                  isActive ? "bg-blue-600 text-white" : "text-black"
                }`}
              >
                <Icon className="w-5 h-5 shrink-0" />
                <span className="truncate">{item.label}</span>
              </div>
            </Link>
          );
        })}
      </aside>
    </div>
  );
}
