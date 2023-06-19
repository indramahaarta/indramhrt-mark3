"use client";

import { ReactNode } from "react";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-white px-4">
      <Navbar />
      <div className="max-w-[1024px] pt-[81px] w-full mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
