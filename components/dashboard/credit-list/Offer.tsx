import { FaTrashAlt } from "react-icons/fa";

export default function Offer() {
  return (
    <div className="bg-yellow-400 p-8 rounded-lg shadow-lg flex items-center justify-between relative mt-6">
      {/* Delete Icon */}
      <button className="absolute top-4 right-12 bg-white p-2 rounded-full shadow-md hover:bg-red-100">
        <FaTrashAlt className="text-red-600" />
      </button>

      {/* Left Side Content */}
      <div>
        <div className="bg-yellow-300 px-4 py-2 rounded-md text-lg font-semibold shadow-sm border border-yellow-500">
          20% Offer
        </div>
        <p className="text-lg font-semibold mt-4">
          Today All Credits 20% Offer
        </p>
      </div>

      {/* Edit Button */}
      <button className="bg-white text-black px-4 py-2 rounded-md shadow hover:bg-gray-100 font-medium mt-12">
        Edit Now
      </button>
    </div>
  );
}
