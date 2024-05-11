"use client";

import React, { useState } from "react";
import "@/styles/components/navbar.scss";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import Link from "next/link";

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
        <Link href="/">
          <li>
            <h1>Promptopia</h1>
          </li>
        </Link>

        <li>
          <a href="#!" onClick={() => setDropdown(!dropdown)}>
            Prompts
            {!dropdown && <FaCaretDown />}
            {dropdown && <FaCaretUp />}
          </a>
          {dropdown && (
            <ul className="nav-dropdown">
              <Link href="/create">
                <li>
                  <a href="#!"> Create Prompts</a>
                </li>
              </Link>
              <Link href="/prompts">
                <li>
                  <a href="#!">View Prompts</a>
                </li>
              </Link>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};
