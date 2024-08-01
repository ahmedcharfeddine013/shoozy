"use client";

import React, { useState } from "react";
import Logo from "../Logo";
import { BsBag } from "react-icons/bs";
import { CiUser } from "react-icons/ci";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="py-4 px-6 md:px-10 fixed z-50 w-full bg-white ">
      <div className="flex items-center justify-between">
        <div>
          <Logo />
        </div>
        <div className="flex items-center justify-center gap-3">
          <BsBag size={24} />
          <CiUser size={24} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
