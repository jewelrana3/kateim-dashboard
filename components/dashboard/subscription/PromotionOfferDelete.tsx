"use client";
import { Trash2 } from "lucide-react";
import React from "react";
import Swal from "sweetalert2";

export default function PromotionOfferDelete() {
  const handleClick = () => {
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
    <button
      className="cursor-pointer border border-[#FEFB82] rounded-full p-2"
      onClick={handleClick}
    >
      <Trash2 className="text-[#E02121]" />
    </button>
  );
}
