"use client";

import React, { useState } from "react";
import "@/styles/components/navbar.scss";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";

export const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="navbar">
      <div className="nav-mobile">
        <a id="nav-toggle" href="#!">
          <span></span>
        </a>
      </div>
      <ul className="nav-list">
        <li>
          <h1>Promptopia</h1>
        </li>

        <li>
          <a href="#">Gallery</a>
        </li>
        <li>
          <a href="#!" onClick={() => setDropdown(!dropdown)}>
            Prompts
            {!dropdown && <FaCaretDown />}
            {dropdown && <FaCaretUp />}
          </a>
          {dropdown && (
            <ul className="nav-dropdown">
              <li>
                <a href="#!"> Create Prompts</a>
              </li>
              <li>
                <a href="#!">View Prompts</a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};
