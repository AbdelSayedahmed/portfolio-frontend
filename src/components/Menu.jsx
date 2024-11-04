import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="flex gap-5 text-[24px]">
      <Link
        to="/AboutMe"
        className="border border-[1px] px-[20px] py-[5px] hover:bg-white hover:bg-opacity-50"
      >
        About Me
      </Link>
      <Link
        to="/Projects"
        className="border border-[1px] px-[20px] py-[5px] hover:bg-white hover:bg-opacity-50"
      >
        Projects
      </Link>
      <Link
        to="/Contacts"
        className="border border-[1px] px-[20px] py-[5px] hover:bg-white hover:bg-opacity-50"
      >
        Contacts
      </Link>
    </div>
  );
}
