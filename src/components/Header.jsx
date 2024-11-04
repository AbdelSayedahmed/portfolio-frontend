import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

export default function Header() {
  return (
    <div className="bg-black h-auto text-white sticky top-0">
      <div className="flex items-center p-[20px] justify-between">
        <Link to="/" className="flex flex-col text-center">
          <h4 className="text-[22px]">Abdelrahman Sayedahmed</h4>
          <h6>-Software Developer-</h6>
        </Link>
        <Menu styling={"flex items-center gap-5"} />
      </div>
      <hr className="h-[5px] bg-orange-500 border-0" />
    </div>
  );
}
