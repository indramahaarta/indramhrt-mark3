import Navbar from "@/components/layout/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Indramhrt | Software Engineer",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-white text-[#6e6e6e]">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
