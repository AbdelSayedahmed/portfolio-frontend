import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex flex-col gap-1 items-center justify-center p-[20px] bg-black h-auto text-white">
      <p>
        This portfolio was created by Abdelrahman Sayedahmed. For more
        information, please contact me{" "}
        <Link to="/contact" className="text-purple-500 underline">
          here
        </Link>
        . Thank you for visiting!
      </p>
      <p>
        &copy; {new Date().getFullYear()} Abdelrahman Sayedahmed. All rights
        reserved. This portfolio is licensed under the{" "}
        <a
          href="https://opensource.org/licenses/MIT"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-500 underline"
        >
          MIT License
        </a>
        .
      </p>
    </div>
  );
}
