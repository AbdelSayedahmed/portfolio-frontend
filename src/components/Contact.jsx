import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <h1>Contact me!</h1>
      <p>
        Mobile Phone
        <i
          className="bi bi-phone-vibrate"
          style={{ fontSize: "24px" }}
        ></i>: <a href="tel:6318294295">+1 (631) 829-4295</a>
      </p>
      <p>
        Personal Email
        <i className="bi bi-envelope-at" style={{ fontSize: "24px" }}></i>:
        <a href="mailto:abdelrahman.s2003@icloud.com">
          abdelrahman.s2003@icloud.com
        </a>
      </p>
      <h4>Socials</h4>
      <Link to="https://www.linkedin.com/in/abdelsayedahmed/" target="_blank">
        <i
          class="bi bi-linkedin"
          style={{ fontSize: "24px", color: "#0077B5" }}
        ></i>
      </Link>
      <Link to="https://github.com/AbdelSayedahmed" target="_blank">
        <i className="bi bi-github" style={{ fontSize: "24px" }}></i>
      </Link>
    </div>
  );
}
