import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="bg-black text-white text-center flex flex-col justify-around items-center p-10 px-40 gap-5 h-auto bg-[url('/mountain-range.png')] bg-[50%_auto] bg-no-repeat bg-bottom">
      <div>
        <img src="./logo.png" alt="logo" />
        <p>Practice beats talents</p>
        <p>- unknown</p>
      </div>
      <div className="flex gap-5">
        <button className="border border-white py-1 px-2">Home</button>
        <button className="border border-white py-1 px-2">Projects</button>
        <button className="border border-white py-1 px-2">button</button>
        <button className="border border-white py-1 px-2">button</button>
        <button className="border border-white py-1 px-2">button</button>
      </div>
    </div>
  );
}
