import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <div className="flex items-center justify-center w-full">
        <Hero />
      </div>
      <div className="py-20">
        <NewArrivals />
      </div>
      <div className="relative">
        <Image
          src={"/assets/images/home_banner.jpg"}
          alt="banner"
          height={300}
          width={300}
          objectFit="cover"
          className="w-full h-fit"
        />
      </div>
    </main>
  );
}
