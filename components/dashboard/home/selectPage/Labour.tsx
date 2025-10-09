import { Check, Edit } from "lucide-react";
import Image from "next/image";
import React from "react";
import LabourModal from "../modal/Labour";

const texts = [
  "Same-Day Labour No Phone Calls,",
  " Skilled professionals you can trust.",
  <>
    <strong>AI Matching</strong> – We Find The Best Fit Instantly
  </>,
  <>
    <strong>post</strong> in less than 1 min.
  </>,
  "all workers verified.",
  "We’re Here Whenever You Need Us.",
];

export default function Labour() {
  return (
    <>
      {/* <div classNameName="absolute top-4 right-4 flex items-center justify-center bg-blue-600 h-8 w-8 text-white rounded-full cursor-pointer">
        <LabourModal />
      </div>

      <div>
        <h1 classNameName="font-semibold text-5xl my-3 leading-16">
          Connecting Talent with <br /> Opportunity, Seamlessly
        </h1>
        <p classNameName="text-[#545454] mt-6">
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
      </div> */}
      <div className="bg-white p-5 rounded-md">
        <div className="flex justify-between">
          <div>
            <h2 className="text-3xl 2xl:text-5xl font-semibold mb-6 text-[#333333]">
              Why Instant Labour?
            </h2>
          </div>
          <div className=" flex items-center justify-center bg-blue-600 h-8 w-8 text-white rounded-full cursor-pointer">
            <LabourModal />
          </div>
        </div>

        <div className=" text-gray-700 my-3">
          <div className="space-y- grid grid-cols-1 md:grid-cols-2 gap-4">
            {texts.map((text, index) => (
              <div className="flex items-start gap-2" key={index}>
                <span className="bg-teal-600 w-7 h-7 text-xl rounded-full p-1 text-white flex justify-center items-center">
                  <Check />
                </span>
                <p className="text-2xl capitalize">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
