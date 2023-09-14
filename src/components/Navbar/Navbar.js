import React from "react";
import Search from "./Search/Search";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";

const Navbar = () => {
  return (
    <div className="flex w-full h-20 justify-between items-center px-5">
      <Logo />
      <Search />
      <Menu />
    </div>
  );
};

export default Navbar;
