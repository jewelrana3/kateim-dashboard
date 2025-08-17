import { Edit3, MessageSquare } from "lucide-react";
import React, { useState } from "react";
import CreditEdit from "./CreditEdit";

const creditPricing = [
  { label: "Post A Job", credit: 10 },
  { label: "Accept Job", credit: 5 },
  { label: "Sent Message", credit: 2 },
  { label: "Message (Worker)", credit: 1 },
];

export default function CreditPrice() {
  const [show, setShow] = useState(false);
  return (
    <div className="space-y-3 w-full md:w-1/2">
      <CreditEdit />
      {creditPricing.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center border border-gray-400 px-3 py-2"
        >
          <span className="flex items-center gap-2 text-sm">
            <MessageSquare className="w-4 h-4 text-gray-600" />
            {item.label}
          </span>
          <span className="text-sm ">{item.credit} Credits</span>
        </div>
      ))}
    </div>
  );
}
