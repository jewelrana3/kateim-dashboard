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
      {" "}
      <section className="p-4">
        <AddPromotional />

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
