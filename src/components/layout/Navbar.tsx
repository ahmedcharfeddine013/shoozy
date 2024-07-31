"use client";

import React, { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <section className="py-4 px-6 md:px-10 ">
      <div>
        <h1 className="text-xl md:text-3xl font-bold">SHOOZY</h1>
      </div>
    </section>
  );
};

export default Nav;
