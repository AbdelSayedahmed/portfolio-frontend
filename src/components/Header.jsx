import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-black h-auto text-white sticky top-0">
      <div className="flex items-center p-[20px] justify-between">
        <Link to="/" className="flex flex-col text-center">
          <h4 className="text-[22px]">Abdelrahman Sayedahmed</h4>
          <h6>-Software Developer-</h6>
        </Link>
        <div className="flex items-center gap-5">
          <Link
            to="/Home"
            className="border border-[1px] px-[20px] py-[5px] hover:bg-white hover:bg-opacity-50"
          >
            Home
          </Link>
          <Link
            to="/Contact"
            className="border border-[1px] px-[20px] py-[5px] hover:bg-white hover:bg-opacity-50"
          >
            Contact
          </Link>
          <Link
            to="/Projects"
            className="border border-[1px] px-[20px] py-[5px] hover:bg-white hover:bg-opacity-50"
          >
            Projects
          </Link>
        </div>
      </div>
      <hr className="h-[5px] bg-orange-500 border-0" /> 
    </div>
  );
}
