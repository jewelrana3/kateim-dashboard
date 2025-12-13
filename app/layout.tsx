import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Providers } from "./providers";

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
        <Providers>
          {children}
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
