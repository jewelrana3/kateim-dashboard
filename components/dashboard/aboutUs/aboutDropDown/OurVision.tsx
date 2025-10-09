import React from "react";
import AboutUsEdit from "../AboutUsEdit";
import { Edit } from "lucide-react";
import Image from "next/image";
import hero from "../../../../public/about-us/vision.png";

export default function OurVision() {
  return (
    <section className="grid grid-cols-2 gap-14 p-4  bg-white rounded-lg shadow-md relative">
      <div className="absolute top-4 right-4 flex items-center justify-center bg-blue-600 h-8 w-8 text-white rounded-full cursor-pointer">
        <AboutUsEdit trigger={<Edit className="w-4 h-4 cursor-pointer" />} />
      </div>
      <div>
        <h1 className="font-semibold text-3xl 2xl:text-5xl my-3 leading-16">
          Our Vision
        </h1>
        <p className="text-[#545454] mt-6">
          Our vision is a world where everyone has equal access to meaningful
          work and every business can easily find the talent it needs to thrive.
          We believe in a future where opportunity is not limited by location,
          background, or circumstance, but fueled by skills, passion, and
          potential. By harnessing technology and fostering human connection, we
          aim to create a global employment ecosystem that is inclusive,
          transparent, and empowering for all.
        </p>
        {/* <button className="bg-[#FFC823] text-[#333333] rounded py-3 px-9 mt-6 text-xl cursor-pointer">
          Contact
        </button> */}
      </div>
      <div>
        <Image src={hero} alt="upload image" width={500} height={500} />
      </div>
    </section>
  );
}
