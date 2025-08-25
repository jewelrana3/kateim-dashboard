import { Edit } from "lucide-react";
import Image from "next/image";
import React from "react";
import LabourModal from "../modal/Labour";

export default function Labour() {
  return (
    <section className="grid grid-cols-2 gap-14 p-4 bg-white rounded-lg shadow-md relative">
      <div className="absolute top-4 right-4 flex items-center justify-center bg-blue-600 h-10 w-10 text-white rounded-full cursor-pointer">
        <LabourModal />
      </div>

      <div>
        <h1 className="font-semibold text-5xl my-3 leading-16">
          Connecting Talent with <br /> Opportunity, Seamlessly
        </h1>
        <p className="text-[#545454] mt-6">
          We make it simple for employers and skilled professionals to connect,
          collaborate, and complete projects — all in one trusted platform
        </p>
      </div>

      <div>
        <Image
          src="https://i.ibb.co.com/5gVyCyh3/Frame-2147227772.png"
          alt="upload image"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
}
