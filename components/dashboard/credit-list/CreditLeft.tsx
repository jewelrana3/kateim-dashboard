import React from "react";
import EditPrice from "./EditPrice";
const creditPackages = [
  { credits: 10, price: "£5" },
  { credits: 25, price: "£10" },
  { credits: 50, price: "£18" },
  { credits: 100, price: "£50" },
];

export default function CreditLeft() {
  return (
    <div className="space-y-3 w-full md:w-1/2 mt-10">
      {creditPackages.map((item, index) => (
        <div
          key={index}
          className="bg-[#FFEEBB] flex justify-between items-center px-4 py-3 rounded-md shadow-sm"
        >
          <div className="text-sm font-semibold">
            {item.credits} Credits <span className="ml-2">{item.price}</span>
          </div>
          <EditPrice />
        </div>
      ))}
    </div>
  );
}
