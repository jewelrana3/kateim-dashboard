"use client";

import ContactUsForm from "@/modal/ContactUsModal";
import { Edit } from "lucide-react";
import React, { useState } from "react";
import AboutUsEdit from "./AboutUsEdit";

export default function AboutUsHeader() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between bg-[#F6F6F6] p-4 rounded-md">
        <h2 className="text-base font-medium text-gray-800">
          About Us Landing Page
        </h2>

        <AboutUsEdit
          trigger={
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 cursor-pointer">
              <Edit className="w-4 h-4" />
            </button>
          }
        />
      </div>
    </>
  );
}
