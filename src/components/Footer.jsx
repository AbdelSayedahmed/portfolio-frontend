import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col gap-1 items-center justify-center p-[20px] bg-black h-auto text-white">
      <div className="flex gap-4 justify-center items-center">
        <a href="tel:+16314857394">
          <i className="bi bi-phone-vibrate text-[36px]"></i>
        </a>
        <a href="mailto:abdelrahman.s2003@icloud.com">
          <i className="bi bi-envelope-at text-[36px]"></i>
        </a>
        <a href="https://www.linkedin.com/in/abdelsayedahmed/" target="_blank">
          <i className="bi bi-linkedin text-[36px]"></i>
        </a>
        <a href="https://github.com/AbdelSayedahmed" target="_blank">
          <i className="bi bi-github text-[36px]"></i>
        </a>
      </div>
      <p>
        This portfolio was created by Abdelrahman Sayedahmed. For more
        information, please contact me . Thank you for visiting!
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
