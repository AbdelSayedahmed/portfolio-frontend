import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center p-20 m-20">
      <div className="flex flex-col justify-center items-center border border-black border-2 rounded-[24px] p-5">
        <h1 className="text-[36px] font-medium">Contact Me</h1>
        <div className="flex flex-col gap-2 p-5 text-[22px]">
          <p>
            <i className="bi bi-envelope-at"></i> <strong>Email Me:</strong>{" "}
            <Link to="mailto:abdelrahman.s2003@icloud.com">
              abdelrahman.s2003@icloud.com
            </Link>
          </p>
          <p>
            <i className="bi bi-phone-vibrate"></i> <strong>Call Me:</strong>{" "}
            <Link to="tel:+16314857394">+1 (631) 485-7394</Link>
          </p>
          <p>
            <i className="bi bi-github"></i> <strong>GitHub:</strong>{" "}
            <Link to="https://github.com/AbdelSayedahmed" target="_blank">
              @AbdelSayedahmed
            </Link>
          </p>
          <p>
            <i className="bi bi-linkedin"></i> <strong>LinkedIn:</strong>{" "}
            <Link
              to="https://www.linkedin.com/in/abdelsayedahmed/"
              target="_blank"
            >
              @abdelsayedahmed
            </Link>
          </p>
          <p>
            <strong>Resumé:</strong>{" "}
            <Link
              to="https://profile.indeed.com/p/abdelrahmans-bs2pcjv"
              target="_blank"
              className="border border-black border-2 rounded-[12px] px-[10px] py-[2px]"
            >
              Preview
            </Link>{" "}
            <Link
              to="https://profile-file-service-temp-prod.s3.us-west-2.amazonaws.com/1219208729_000d879c-b887-4e3b-81ef-eba6f7b29f13?response-content-disposition=attachment%3Bfilename%3DAbdelrahman-Sayedahmed.pdf&response-content-type=application%2Fpdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241122T173202Z&X-Amz-SignedHeaders=host&X-Amz-Credential=AKIAZKXXDXTXZF2KYWCD%2F20241122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Expires=300&X-Amz-Signature=84d117bac0686d1f5d87ada5d11f7c53e4dc58940a078a08f395c24d4752aa3e"
              className="border border-black border-2 rounded-[12px] px-[10px] py-[2px]"
            >
              <i class="bi bi-download"></i> Download
            </Link>
          </p>
          <p>
            <strong>Leetcode Profile</strong>{" "}
            <Link to="https://leetcode.com/u/abdelsayedahmed/" target="_blank">
              @abdelsayedahmed
            </Link>
          </p>
          <p>
            <strong>Codewars Profile</strong>{" "}
            <Link
              to="https://www.codewars.com/users/abdelsayedahmed"
              target="_blank"
            >
              @abdelsayedahmed
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
