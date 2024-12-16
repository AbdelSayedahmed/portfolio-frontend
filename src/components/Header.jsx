import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-black h-auto text-white sticky top-0 z-50">
      <div className="flex items-center p-[20px] justify-between">
        <Link to="/" className="flex flex-col text-center">
          <h4 className="text-[22px]">Abdelrahman Sayedahmed</h4>
          <h6>-Software Developer-</h6>
        </Link>
        <div className="block sm:hidden cursor-pointer" onClick={toggleMenu}>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </div>
        <Menu styling={"flex items-center gap-5"} isOpen={menuOpen} />
      </div>
      <hr className="h-[5px] bg-orange-500 border-0" />
    </div>
  );
}
