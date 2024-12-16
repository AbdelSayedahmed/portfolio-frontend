import React from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="bg-black text-white flex flex-col items-center min-h-screen bg-[url('/images/mountain-range.png')] bg-[70%_auto] bg-no-repeat bg-center md:bg-[40%_auto] sm:bg-cover">
      <img
        src=" /images/logo.png"
        alt="Abdel's logo"
        className="w-[80%] mt-20 lg:w-[50%]"
      />
      <div className="text-[30px] text-center font-semibold mt-[10%] px-4">
        <p className="bg-white bg-opacity-20 px-[5px]">
          Practice beats talents
        </p>
        <p className="bg-white bg-opacity-20 px-[5px] italic w-max mx-auto">
          - unknown
        </p>
      </div>
      <div className="flex flex-col gap-5 text-[24px] mt-[10%] lg:flex-row">
        <Link
          to="/AboutMe"
          className="border border-[1px] px-[15px] py-[5px] hover:bg-white hover:bg-opacity-50"
        >
          About Me
        </Link>
        <Link
          to="/Projects"
          className="border border-[1px] px-[15px] py-[5px] hover:bg-white hover:bg-opacity-50"
        >
          Projects
        </Link>
        <Link
          to="/Contact"
          className="border border-[1px] px-[15px] py-[5px] hover:bg-white hover:bg-opacity-50"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}
