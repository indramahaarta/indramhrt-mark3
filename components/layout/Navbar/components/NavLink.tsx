import { ReactNode } from "react";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex items-center">
      <a href={href}>{children}</a>
    </div>
  );
};

export default NavLink;
