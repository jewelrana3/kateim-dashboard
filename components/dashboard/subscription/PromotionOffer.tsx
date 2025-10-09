import React from "react";
import OfferModal from "./OfferModal";

import PromotionOfferDelete from "./PromotionOfferDelete";

export default function PromotionOffer() {
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
            20% Offer
          </span>
        </div>
        <div className="flex justify-between mt-10">
          <p className="mt-2 text-black text-lg font-medium">
            All Package 20% Offer
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
