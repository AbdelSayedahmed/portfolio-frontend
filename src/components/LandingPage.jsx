import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="bg-black text-white flex flex-col items-center min-h-screen bg-[url('/mountain-range.png')] bg-[70%_auto] bg-no-repeat bg-center">
      <img src="./logo.png" alt="Abdels logo" className="mt-[5%]" />
      <div className="text-[30px] text-center font-semibold mt-[10%]">
        <p className="bg-white bg-opacity-20 px-[5px]">
          Practice beats talents
        </p>
        <p className="bg-white bg-opacity-20 px-[5px] italic w-max mx-auto">
          - unknown
        </p>
      </div>
      <div className="flex gap-5 text-[24px] mt-[10%]">
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
      </div>
    </div>
  );
}
