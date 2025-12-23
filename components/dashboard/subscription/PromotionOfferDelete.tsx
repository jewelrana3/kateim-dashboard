"use client";
import { Trash2 } from "lucide-react";
import React from "react";
import Swal from "sweetalert2";
import { useDeleteGlobalCoupon } from "@/lib/query/hooks/dashboard/package";

export default function PromotionOfferDelete({ couponId }: { couponId: string }) {
  const deleteGlobalCoupon = useDeleteGlobalCoupon();

  const handleClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this promotional coupon!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteGlobalCoupon.mutateAsync({ id: couponId });
          // Success toast is handled by the mutation's onSuccess callback
        } catch (error) {
          // Error toast is handled by the mutation's onError callback
          console.error("Failed to delete coupon:", error);
        }
      }
    });
  };

  return (
    <button
      className="cursor-pointer border border-[#FEFB82] rounded-full p-2"
      onClick={handleClick}
      disabled={deleteGlobalCoupon.isPending}
    >
      <Trash2 className="text-[#E02121]" />
    </button>
  );
}
