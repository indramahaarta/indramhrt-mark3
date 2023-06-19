import { ReactNode } from "react";

const NavLinkWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="flex gap-8">{children}</div>;
};

export default NavLinkWrapper;
