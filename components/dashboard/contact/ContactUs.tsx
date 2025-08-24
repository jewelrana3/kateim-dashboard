"use client";
import Image from "next/image";
import ContactEdit from "./ContactEdit";
import { Edit } from "lucide-react";
import { useState } from "react";
import ContactUsForm from "@/modal/ContactUsModal";

export default function ContactUs() {
  const [show, setShow] = useState(false);
  return (
    <>
      <section className="max-w-7xl mx-auto my-5">
        <ContactEdit />

        <section className="grid grid-cols-2 gap-14 p-4 bg-white rounded-lg shadow-md relative">
          <button
            className="absolute top-4 right-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 cursor-pointer"
            onClick={() => setShow(true)}
          >
            <Edit className="w-4 h-4" />
          </button>

          <div>
            <h1 className="font-semibold text-5xl my-3 leading-16">
              Connecting Talent with <br /> Opportunity, Seamlessly
            </h1>
            <p className="text-[#545454] mt-6">
              We make it simple for employers and skilled professionals to
              connect, collaborate, and complete projects — all in one trusted
              platform
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
      </section>

      {show && <ContactUsForm isOpen={show} onClose={() => setShow(false)} />}
    </>
  );
}
