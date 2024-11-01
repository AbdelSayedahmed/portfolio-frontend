import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="bg-black text-white flex flex-col justify-around items-center min-h-screen bg-[url('/mountain-range.png')] bg-[70%_auto] bg-no-repeat bg-center">
      <img src="./Logo.png" alt="Abdels logo" />
      <div>
        <p>Practice beats talents</p>
        <p>- unknown</p>
      </div>
      <div className="flex gap-5">
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
          className="border border-[1px] px-[20px] py-[5px]  hover:bg-white hover:bg-opacity-50"
        >
          Projects
        </Link>
      </div>
    </div>
  );
}
