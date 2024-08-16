import React from "react";
import Logo from "../Logo";

const Footer = () => {
  return (
    <div
      id="footer"
      className="flex items-center flex-col bg-black text-white gap-5 justify-between border-t-2"
    >
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 p-20 pb-6 justify-items-start lg:justify-items-center gap-5">
        <div className="space-y-2">
          <Logo />
          <p className="font-thin">
            SHOOZY uses fake data and is not released under the MIT license.
          </p>
        </div>
        <div className="space-y-2">
          <FooterListTitle title="Support" />
          <div className="flex flex-col text-md font-thin">
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
        </div>
        <div className="space-y-2">
          <FooterListTitle title="Account" />
          <div className="flex flex-col text-md font-thin">
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
          </div>
        </div>
        <div className="space-y-2">
          <FooterListTitle title="Quick Link" />
          <div className="flex flex-col text-md font-thin">
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
        </div>
      </div>
      <div className="py-6 border-t flex items-center justify-center flex-col gap-2 w-[70%] ">
        <div>© Designed and developed by Ahmed Charfeddine</div>
      </div>
    </div>
  );
};

export default Footer;

function FooterListTitle({ title }: { title: string }) {
  return <h1 className="font-bold text-lg">{title}</h1>;
}
