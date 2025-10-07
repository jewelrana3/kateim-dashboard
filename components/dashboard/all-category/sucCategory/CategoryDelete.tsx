"use client";

import { Trash2 } from "lucide-react";
import React from "react";
import Swal from "sweetalert2";

export default function CategoryDelete() {
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
    <button className="text-red-600 cursor-pointer" onClick={handleDelete}>
      <Trash2 size={20} />
    </button>
  );
}
