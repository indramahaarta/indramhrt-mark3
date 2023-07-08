"use client";

import { useState } from "react";
import HamburgerIcon from "./components/HambergerIcon";
import NavLink from "./components/NavLink";
import NavLinkWrapper from "./components/NavLinkWrapper";
import WrapperHamburger from "./components/WrapperHumberger";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleHamburger = () => {
    setOpen(!open);
  };
  return (
    <div className="h-[81px] bg-transparent w-full flex items-center justify-between max-w-[1024px] mx-auto bg-white text-[#6E6E6E] fixed translate-x-1/2 right-1/2 px-6 z-[100]">
      <div className="flex items-center">Indramhrt</div>
      <WrapperHamburger open={open} onClick={toggleHamburger}>
        <HamburgerIcon />
      </WrapperHamburger>
      <NavLinkWrapper open={open}>
        <NavLink href="/">Work</NavLink>
        <NavLink href="/me">Me</NavLink>
      </NavLinkWrapper>
    </div>
  );
};

export default Navbar;
