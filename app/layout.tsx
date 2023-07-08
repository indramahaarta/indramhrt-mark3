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
      <body className={inter.className}>
        {" "}
        <div className="bg-white px-4">
          <Navbar />
          <div className="max-w-[1024px] pt-[81px] pb-8 w-full mx-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
