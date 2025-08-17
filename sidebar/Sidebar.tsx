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

export const sidebarMenu = [
  { label: "Overview", icon: LayoutGrid, path: "/" },
  { label: "All Employer List", icon: User, path: "/all-employe-list" },
  { label: "All Worker List", icon: User, path: "" },
  { label: "All Category", icon: List, path: "" },
  { label: "Home Landing Page", icon: Home, path: "" },
  { label: "About Us Landing Page", icon: Store, path: "" },
  { label: "Contact Us Landing Page", icon: Calendar, path: "" },
  { label: "Credit List", icon: CreditCard, path: "" },
  { label: "Change Password", icon: Key, path: "" },
  { label: "Terms And Condition", icon: Shield, path: "" },
  { label: "Log Out", icon: LogOut, path: "" },
];

export default function Sidebar() {
  return (
    <aside className=" bg-white h-screen p-4 space-y-1 text-sm">
      {sidebarMenu.map((item, index) => {
        const Icon = item.icon;
        return (
          <Link href={`/${item.path}`}>
            <div
              key={index}
              className={`flex items-center gap-3 px-4 my-4 py-2 cursor-pointer  ${
                item.label === "Overview"
                  ? "bg-blue-600 text-white"
                  : "text-black"
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
