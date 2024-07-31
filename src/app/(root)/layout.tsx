import Nav from "@/components/layout/Navbar";
import React, { ReactNode } from "react";

const UserRoot = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default UserRoot;
