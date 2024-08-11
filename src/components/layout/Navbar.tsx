"use client";

import React, { useState } from "react";
import Logo from "../Logo";
import { BsBag } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="py-4 px-6 md:px-10 fixed z-50 w-full bg-white border-b-2 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <Logo />
        </div>
        <div className="flex items-center justify-center gap-3">
          <Link href={"/cart"}>
            <BsBag size={24} />
          </Link>
          <Link href={"/"}>
            <CiUser size={24} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
