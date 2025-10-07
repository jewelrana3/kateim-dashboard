import Image from "next/image";
import React from "react";
import AboutUsEdit from "../AboutUsEdit";
import { Edit } from "lucide-react";
import hero from "../../../../public/about-us/hero.png";

export default function AboutSection() {
  return (
    <section className="grid grid-cols-2 gap-14 p-4  bg-white rounded-lg shadow-md relative">
      <div className="absolute top-4 right-4 flex items-center justify-center bg-blue-600 h-8 w-8 text-white rounded-full cursor-pointer">
        <AboutUsEdit trigger={<Edit className="w-4 h-4 cursor-pointer" />} />
      </div>
      <div>
        <h1 className="font-semibold text-5xl my-3 leading-16">
          Connecting Talent with <br /> Opportunity, Seamlessly
        </h1>
        <p className="text-[#545454] mt-6">
          We make it simple for employers and skilled professionals to connect,
          collaborate, and complete projects — all in one trusted platform
        </p>
        <button className="bg-[#FFC823] text-[#333333] rounded py-3 px-9 mt-6 text-xl cursor-pointer">
          Contact
        </button>
      </div>
      <div>
        <Image src={hero} alt="upload image" width={400} height={400} />
      </div>
    </section>
  );
}
