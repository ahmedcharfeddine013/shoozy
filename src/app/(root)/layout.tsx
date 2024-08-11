'use client'

import Nav from "@/components/layout/Navbar";
import React, { ReactNode } from "react";
import ShopButton from "../../components/layout/ShopButton";
import Footer from "@/components/layout/Footer";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

const UserRoot = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <Nav />
      <div className="pt-20">{children}</div>
      <div className="fixed bottom-6 right-6">
        <ShopButton />
      </div>
      <Footer />
    </Provider>
  );
};

export default UserRoot;
