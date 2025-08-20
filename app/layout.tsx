import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/header/Header";
import Sidebar from "@/sidebar/Sidebar";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Katiem Dashboard Application",
  description: "dashboard ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="">
        <div>
          <Header />
        </div>
        <section className="grid grid-cols-[240px_1fr] h-screen">
          <aside className="bg-white ">
            <Sidebar />
          </aside>
          <main className="main bg-[#F6F6F6]">{children}</main>
        </section>
      </body>
    </html>
  );
}
