import { Faq } from "@/components/dashboard/faq/Faq";
import FaqEdit from "@/components/dashboard/faq/FaqEdit";
import React from "react";

export default function FaqPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="my-6 text-2xl font-medium">FAQ Section</h1>
        <FaqEdit
          title="Add Faq"
          trigger={
            <button className="cursor-pointer bg-blue-500 py-1 px-2 rounded text-white font-medium">
              Add Faq
            </button>
          }
        />
      </div>
      <Faq />
    </div>
  );
}
