import Nav from "@/components/layout/Navbar";
import React, { ReactNode } from "react";

const UserRoot = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Nav />
      <div className="pt-20">{children}</div>
    </div>
  );
};

export default UserRoot;
