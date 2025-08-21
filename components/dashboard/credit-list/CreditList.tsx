"use client";

import { Edit3, Send, MessageSquare } from "lucide-react";
import AddPromotional from "./AddPromotional";
import { useState } from "react";
import CreditPrice from "./CreditPrice";
import CreditLeft from "./CreditLeft";

export default function CreditList() {
  const [show, setShow] = useState(false);
  return (
    <>
      <section className="p-4">
        <div className="flex justify-end gap-5">
          <AddPromotional
            title="Free Offers"
            trigger={
              <button className="bg-[#0057DC] text-white rounded py-1 px-2 cursor-pointer">
                Free Credits
              </button>
            }
          />

          <AddPromotional
            title="Add Offers"
            trigger={
              <button className="bg-[#0057DC] text-white rounded py-1 px-2 cursor-pointer">
                Add Promotional Offers
              </button>
            }
          />
        </div>

        <div className="bg-white shadow-md rounded-md p-4 flex justify-between gap-6 mt-7">
          {/* Left side: Credit pricing */}
          <CreditPrice />

          {/* Right side: Credit packages */}
          <CreditLeft />
        </div>
        {/* modal show */}
      </section>
    </>
  );
}
