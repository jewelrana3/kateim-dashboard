'use client'
import React from "react";
import OfferModal from "./OfferModal";

import PromotionOfferDelete from "./PromotionOfferDelete";
import { useGetGlobalCoupon } from "@/lib/query/hooks/dashboard/package";
import { ICoupon } from "@/types/others";

export default function PromotionOffer({ coupon }: { coupon: ICoupon }) {


  if (!coupon) {
    return null;
  }

  return (
    <section className=" lg:w-[50%] ml-5 mt-5 ">
      <h1 className="bg-[#B0CBF4] py-2 text-center font-bold rounded-md w-full">
        Promotional Offer
      </h1>
      <div className="bg-[#FFC823] mt-4 p-6 rounded-lg  shadow-md h-[260px]">
        {/* delte btn */}
        <div className="flex justify-end">
          <PromotionOfferDelete />
        </div>
        <div className="mt-10">
          <span className="bg-[#FFC823] text-[#333333] font-semibold text-4xl px-4 py-2 rounded-md shadow  border border-[#FEFB82]">
            {coupon.percent_off}% Offer
          </span>
        </div>
        <div className="flex justify-between mt-10">
          <p className="mt-2 text-black text-lg font-medium">
            {coupon.description || `All Package ${coupon.percent_off}% Offer`}
          </p>

          <OfferModal
            title="Edit Offer"
            trigger={
              <div className="bg-white text-text-gray-700 font-semibold px-4 py-3 rounded-md cursor-pointer">
                Edit Now
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
