"use client";

import Nav from "@/components/layout/Navbar";
import React, { ReactNode } from "react";
import ShopButton from "../../components/layout/ShopButton";
import Footer from "@/components/layout/Footer";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { Toaster } from "@/components/ui/toaster";

const UserRoot = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <Nav />
      <div className="pt-20 relative">
        {children} <ShopButton />
      </div>
      <Footer />
      <Toaster />
    </Provider>
  );
};

export default UserRoot;
