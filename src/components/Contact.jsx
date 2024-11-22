import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center p-10 m-20 border border-black border-2 rounded-[24px]">
      <div>
      <h1>Contact Me</h1>
      <p>
        Email Me:{" "}
        <Link to="mailto:abdelrahman.s2003@icloud.com">
          abdelrahman.s2003@icloud.com
        </Link>
      </p>
      <p>
        Call Me: <Link to="tel:+16318294295">+1 (631) 829-4295</Link>
      </p>
      </div>
    </div>
  );
}
