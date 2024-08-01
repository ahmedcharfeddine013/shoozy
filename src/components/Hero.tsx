import React from "react";

const Hero = () => {
  return (
    <section className="w-full nav-height mx-3 relative">
      <div className="h-5/6 w-full flex-col  flex-center">
        <div className="md:w-10/12 w-9/12  rounded-3xl overflow-hidden">
          <video className="pointer-events-none" autoPlay loop muted playsInline>
            <source src="/assets/videos/heroVideo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
