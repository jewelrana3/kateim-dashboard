import CreditPricingModal from "@/modal/CreditPricingModal";
import { Edit3 } from "lucide-react";
import React, { useState } from "react";

export default function CreditEdit() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">Credit Pricing</h3>
        <button
          className="bg-blue-600 text-white p-2 rounded-full cursor-pointer"
          onClick={() => setShow(true)}
        >
          <Edit3 className="w-4 h-4" />
        </button>
      </div>
      {/* modal show */}
      {show && (
        <CreditPricingModal isOpen={show} onClose={() => setShow(false)} />
      )}
    </>
  );
}
