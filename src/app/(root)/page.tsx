import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <div className="flex items-center justify-center w-full">
        <Hero />
      </div>
    </main>
  );
}
