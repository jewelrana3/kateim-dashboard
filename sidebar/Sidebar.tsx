"use client";

import {
  LayoutGrid,
  User,
  List,
  Home,
  Store,
  Calendar,
  CreditCard,
  Key,
  Shield,
  LogOut,
  Icon,
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
  { id: 4, label: "All Category", icon: List, path: "#" },
  { id: 5, label: "Home Landing Page", icon: Home, path: "#" },
  { id: 6, label: "About Us Landing Page", icon: Store, path: "#" },
  {
    id: 7,
    label: "Contact Us Landing Page",
    icon: Calendar,
    path: "/contact-us",
  },
  { id: 8, label: "Credit List", icon: CreditCard, path: "/credit-list" },
  { id: 9, label: "Change Password", icon: Key, path: "/change-password" },
  {
    id: 10,
    label: "Terms And Condition",
    icon: Shield,
    path: "/terms-condition",
  },
  {
    id: 11,
    label: "Contact & Support",
    icon: Shield,
    path: "/support",
  },
  { id: 12, label: "Log Out", icon: LogOut, path: "#" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className=" bg-white h-screen p-4 space-y-1 text-sm">
      {sidebarMenu.map((item, index) => {
        const isActive = pathname === item.path;
        const Icon = item.icon;
        return (
          <Link key={index} href={item.path}>
            <div
              className={`flex items-center gap-3 px-4 my-4 py-2 cursor-pointer  ${
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
  );
}
