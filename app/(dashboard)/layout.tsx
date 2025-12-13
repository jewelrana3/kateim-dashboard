"use client";

import { Poppins } from "next/font/google";
import "../globals.css";
import Header from "@/header/Header";
import Sidebar from "@/sidebar/Sidebar";
import { withAuth } from "@/lib/auth-guard";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins-sans",
  subsets: ["latin"],
});

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex">
      <aside className="bg-white">
        <Sidebar />
      </aside>
      <main className="main flex-1 h-screen bg-[#F6F6F6]">
        <div className="sticky top-0 z-50">
          <Header />
        </div>
        <div
          className="overflow-y-auto scroll-smooth p-4 hide-scrollbar"
          style={{ height: "calc(100vh - 68px)" }}
        >
          {children}
        </div>
      </main>
    </section>
  );
}

// Protect the entire dashboard layout with authentication
export default withAuth(DashboardLayout);
