import { heroImg } from "@/constants";
import Image from "next/image";
import React from "react";
import { Button, ButtonGroup } from "@nextui-org/button";

const Hero = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <section className="w-full md:block hidden nav-height mx-3">
        <div className="h-5/6 w-full flex-col flex items-center justify-center ">
          <div className="md:w-10/12 w-9/12 rounded-3xl overflow-hidden">
            <video autoPlay loop muted playsInline>
              <source src="/assets/videos/heroVideo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      <section className="md:hidden min-h-[85vh] flex items-center justify-center">
        <div className="flex items-center justify-center z-20 w-full h-full">
          <h1 className="text-5xl text-white font-bold border mx-10 text-center p-10 bg-gray-200/10 shadow-lg">
            GET SHOOZY
          </h1>
        </div>
        <Image
          src={"/assets/images/hero.jpg"}
          alt="hero"
          objectFit="cover"
          layout="fill"
          className="h-full w-full absolute top-0 left-0 -z-20 "
        />
      </section>
    </div>
  );
};

export default Hero;
