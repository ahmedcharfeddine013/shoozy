import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <h1 className="text-xl md:text-3xl font-extrabold">SHOOZY</h1>
    </Link>
  );
};

export default Logo;
