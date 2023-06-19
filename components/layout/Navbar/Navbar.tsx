import NavLink from "./components/NavLink";
import NavLinkWrapper from "./components/NavLinkWrapper";

const Navbar = () => {
  return (
    <div className="h-[81px] bg-transparent w-full flex justify-between max-w-[1024px] mx-auto bg-white text-[#6E6E6E] fixed translate-x-1/2 right-1/2 px-4 z-[100]">
      <div className="flex items-center">Indramhrt</div>
      <NavLinkWrapper>
        <NavLink href="/">Work</NavLink>
        <NavLink href="/me">Me</NavLink>
      </NavLinkWrapper>
    </div>
  );
};

export default Navbar;
