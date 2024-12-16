import React from "react";
import { Link } from "react-router-dom";

export default function Menu({ styling, isOpen }) {
  return (
    <div
      className={`${
        isOpen
          ? "fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-40"
          : "hidden"
      } flex flex-col justify-center items-center sm:block transition-all duration-300 ease-in-out`}
    >
      <Link
        to="/AboutMe"
        className="border border-[1px] px-[15px] py-[5px] hover:bg-white hover:bg-opacity-50 text-sm sm:text-md mb-5"
        onClick={() => setMenuOpen(false)}
      >
        About Me
      </Link>
      <Link
        to="/Projects"
        className="border border-[1px] px-[15px] py-[5px] hover:bg-white hover:bg-opacity-50 text-sm sm:text-md mb-5"
        onClick={() => setMenuOpen(false)}
      >
        Projects
      </Link>
      <Link
        to="/Contact"
        className="border border-[1px] px-[15px] py-[5px] hover:bg-white hover:bg-opacity-50 text-sm sm:text-md"
        onClick={() => setMenuOpen(false)}
      >
        Contact Me
      </Link>
    </div>
  );
}
