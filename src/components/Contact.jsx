import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-orange-200 to-red-300 min-h-[calc(100vh-252px)] p-4 sm:p-8">
      <div className="w-full sm:w-[80%] lg:w-[60%] h-max flex flex-col justify-center items-center border border-gray-300 rounded-[24px] p-4 sm:p-8 shadow-lg bg-white">
        <h1 className="text-[24px] sm:text-[36px] font-semibold mb-4 text-gray-800">
          Contact Me
        </h1>
        <div className="flex flex-col gap-4 text-[16px] sm:text-[18px] text-gray-700">
          <p className="flex items-center gap-2">
            <i className="bi bi-envelope-at text-blue-500 text-[24px]"></i>{" "}
            <strong>Email Me:</strong>{" "}
            <Link
              to="mailto:abdelrahman.s2003@icloud.com"
              className="text-blue-600 hover:underline"
            >
              abdelrahman.s2003@icloud.com
            </Link>
          </p>
          <p className="flex items-center gap-2">
            <i className="bi bi-phone-vibrate text-green-500 text-[24px]"></i>{" "}
            <strong>Call Me:</strong>{" "}
            <Link
              to="tel:+16314857394"
              className="text-green-600 hover:underline"
            >
              +1 (631) 485-7394
            </Link>
          </p>
          <p className="flex items-center gap-2">
            <i className="bi bi-github text-gray-800 text-[24px]"></i>{" "}
            <strong>GitHub:</strong>{" "}
            <Link
              to="https://github.com/AbdelSayedahmed"
              target="_blank"
              className="text-gray-800 hover:underline"
            >
              @AbdelSayedahmed
            </Link>
          </p>
          <p className="flex items-center gap-2">
            <i className="bi bi-linkedin text-blue-700 text-[24px]"></i>{" "}
            <strong>LinkedIn:</strong>{" "}
            <Link
              to="https://www.linkedin.com/in/abdelsayedahmed/"
              target="_blank"
              className="text-blue-700 hover:underline"
            >
              @abdelsayedahmed
            </Link>
          </p>
          <p className="flex items-center gap-2">
            <strong>Resumé:</strong>{" "}
            <Link
              to="https://profile.indeed.com/p/abdelrahmans-bs2pcjv"
              target="_blank"
              className="border border-blue-600 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-[12px] px-[10px] py-[4px] transition-all"
            >
              Preview
            </Link>{" "}
            <Link
              to="https://profile-file-service-temp-prod.s3.us-west-2.amazonaws.com/1219208729_000d879c-b887-4e3b-81ef-eba6f7b29f13?response-content-disposition=attachment%3Bfilename%3DAbdelrahman-Sayedahmed.pdf&response-content-type=application%2Fpdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241122T173202Z&X-Amz-SignedHeaders=host&X-Amz-Credential=AKIAZKXXDXTXZF2KYWCD%2F20241122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Expires=300&X-Amz-Signature=84d117bac0686d1f5d87ada5d11f7c53e4dc58940a078a08f395c24d4752aa3e"
              className="border border-green-600 bg-green-100 hover:bg-green-200 text-green-700 rounded-[12px] px-[10px] py-[4px] transition-all flex items-center gap-1"
            >
              <i className="bi bi-download"></i> Download
            </Link>
          </p>
          <p className="flex items-center gap-2">
            <strong>Leetcode Profile:</strong>{" "}
            <Link
              to="https://leetcode.com/u/abdelsayedahmed/"
              target="_blank"
              className="text-yellow-700 hover:underline"
            >
              @abdelsayedahmed
            </Link>
          </p>
          <p className="flex items-center gap-2">
            <strong>Codewars Profile:</strong>{" "}
            <Link
              to="https://www.codewars.com/users/abdelsayedahmed"
              target="_blank"
              className="text-red-700 hover:underline"
            >
              @abdelsayedahmed
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
