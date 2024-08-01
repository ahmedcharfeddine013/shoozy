import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center w-full">
        <Hero />
      </div>
    </main>
  );
}
