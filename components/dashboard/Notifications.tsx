import { BellIcon } from "lucide-react";
import React from "react";

const data = [
  {
    des: " Your car rental starts tomorrow! Don't forget to bring your documents.",
    date: "Fri, 12:30pm",
  },
];

export default function Notifications() {
  const repeatData = Array(6).fill(data[0]);
  return (
    <>
      {repeatData.map((item, index) => (
        <div
          className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm my-4"
          key={index}
        >
          {/* Icon */}
          <div className="bg-blue-100 p-2 rounded-md">
            <BellIcon className="h-5 w-5 text-blue-500" />
          </div>

          {/* Message and timestamp */}
          <div>
            <p className="text-sm text-gray-800 font-medium">{item.des}</p>
            <p className="text-xs text-gray-500 mt-1">{item.date}</p>
          </div>
        </div>
      ))}
    </>
  );
}
