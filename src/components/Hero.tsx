import { heroImg } from "@/constants";
import Image from "next/image";
import React from "react";
import { Button, ButtonGroup } from "@nextui-org/button";

const Hero = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <section className="w-full md:block hidden nav-height mx-3 relative">
        <div className="h-5/6 w-full flex-col flex-center">
          <div className="md:w-10/12 w-9/12 rounded-3xl overflow-hidden">
            <video autoPlay loop muted playsInline>
              <source src="/assets/videos/heroVideo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      <section className="md:hidden h-[85vh] bg-hero-image">
        <div className="absolute z-50 top-52 left-6 bg-white/30 ">
          <h1 className="text-6xl text-black font-bold">
            Discover our luxuary
          </h1>
          <Button></Button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
