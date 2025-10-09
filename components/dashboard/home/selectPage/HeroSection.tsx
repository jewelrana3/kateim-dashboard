import Image from "next/image";
import React from "react";
import HeroSectionModal from "../modal/HeroSection";
import hero from "../../../../public/home/hero.png";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-[auto_30%] gap-14 p-4 bg-white rounded-lg shadow-md relative">
      <div className="absolute top-4 right-4 flex items-center justify-center bg-blue-600 h-8 w-8 text-white rounded-full cursor-pointer">
        <HeroSectionModal />
      </div>

      <div>
        <h1 className="font-semibold text-3xl 2xl:text-5xl my-3 leading-12 2xl:leading-16">
          Employment marketplace find trusted labour in minutes no phone calls
          needed.
        </h1>
        <p className="text-[#545454] mt-6 capitalize">
          instantly match with local tradesmen and temp workers!
        </p>
      </div>

      <div>
        <Image src={hero} alt="upload image" width={300} height={300} />
      </div>
    </section>
  );
}
