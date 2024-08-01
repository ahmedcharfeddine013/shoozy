import Nav from "@/components/layout/Navbar";
import React, { ReactNode } from "react";
import ShopButton from '../../components/layout/ShopButton';

const UserRoot = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Nav />
      <div className="pt-20">{children}</div>
      <div className="fixed bottom-6 right-6">
        <ShopButton />
      </div>
    </div>
  );
};

export default UserRoot;
