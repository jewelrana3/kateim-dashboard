import { FaTrashAlt } from "react-icons/fa";
import EditModal from "./modal/EditModal";
import Swal from "sweetalert2";

export default function Offer() {
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to be delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="bg-yellow-400 p-8 rounded-lg shadow-lg flex items-center justify-between relative mt-6">
      {/* Delete Icon */}
      <button
        className="absolute top-4 right-12 bg-white p-2 rounded-full shadow-md hover:bg-red-100 cursor-pointer"
        onClick={handleDelete}
      >
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
      <EditModal />
    </div>
  );
}
