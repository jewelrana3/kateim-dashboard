import React from "react";
import AboutUsEdit from "../AboutUsEdit";
import { Edit } from "lucide-react";
import Image from "next/image";
import hero from "../../../../public/about-us/mission.png";

export default function Mission() {
  return (
    <section className="grid grid-cols-[40%_auto] gap-14 p-4  bg-white rounded-lg shadow-md relative">
      <div className="absolute top-4 right-4 flex items-center justify-center bg-blue-600 h-8 w-8 text-white rounded-full cursor-pointer">
        <AboutUsEdit trigger={<Edit className="w-4 h-4 cursor-pointer" />} />
      </div>
      <div>
        <Image src={hero} alt="upload image" width={500} height={500} />
      </div>
      <div>
        <h1 className="font-semibold text-3xl 2xl:text-5xl my-3 leading-16">
          Our Mission
        </h1>
        <p className="text-[#545454] mt-6">
          We are a dedicated employment marketplace built to connect talent with
          opportunity. Our platform brings together job seekers, employers, and
          recruiters in one seamless space, making the hiring process faster,
          fairer, and more transparent. Whether you’re searching for your next
          career move or looking to build the perfect team, we provide the
          tools, insights, and support to help you succeed. With a focus on
          trust, efficiency, and human connection, we’re here to bridge the gap
          between ambition and achievement.
        </p>
        {/* <button className="bg-[#FFC823] text-[#333333] rounded py-3 px-9 mt-6 text-xl cursor-pointer">
          Contact
        </button> */}
      </div>
    </section>
  );
}
