// LandingPage.js
import React from "react";
import Menu from "./Menu";

export default function LandingPage() {
  return (
    <div className="bg-black text-white flex flex-col items-center min-h-screen bg-[url('./mountain-range.png')] bg-[70%_auto] bg-no-repeat bg-center">
      <img src="./logo.png" alt="Abdel's logo" className="mt-[5%]" />
      <div className="text-[30px] text-center font-semibold mt-[10%]">
        <p className="bg-white bg-opacity-20 px-[5px]">
          Practice beats talents
        </p>
        <p className="bg-white bg-opacity-20 px-[5px] italic w-max mx-auto">
          - unknown
        </p>
      </div>
      <div className="mt-[10%]">
        <Menu />
      </div>
    </div>
  );
}
