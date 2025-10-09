import React from "react";
import hero from "../../../../public/about-us/why.png";
import Image from "next/image";
import AboutUsEdit from "../AboutUsEdit";
import { Edit } from "lucide-react";

export default function WhyChoose() {
  return (
    <section className="grid grid-cols-[auto_55%] gap-14 p-4  bg-white rounded-lg shadow-md relative">
      <div className="absolute top-4 right-4 flex items-center justify-center bg-blue-600 h-8 w-8 text-white rounded-full cursor-pointer">
        <AboutUsEdit trigger={<Edit className="w-4 h-4 cursor-pointer" />} />
      </div>
      {/* Image Section */}
      <div className="md:flex-shrink-0">
        <div>
          <Image src={hero} alt="upload image" width={500} height={500} />
        </div>
      </div>

      {/* Content Section */}
      <div className="">
        <h1 className="font-semibold text-3xl 2xl:text-4xl my-3 leading-10 2xl:leading-16">
          Why Choose InstantLabour
        </h1>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>All-In-One Platform : </strong> Post, Hire, Communicate, And
            Pay — In One Place.
          </li>
          <li>
            <strong>Trusted Network : </strong> Verified Professionals And
            Businesses.
          </li>
          <li>
            <strong>24/7 Support : </strong> We’re Here Whenever You Need Help.
          </li>
        </ul>
      </div>
    </section>
  );
}
