"use client";
import React from "react";
import SubscriptionModal from "./SubscriptionModal";
import PromotionOffer from "./PromotionOffer";
import {
  useGetGlobalCoupon,
  useGetPackages,
} from "@/lib/query/hooks/dashboard/package";
import { IPackage } from "@/types/others";

export default function Subscription() {
  const { data: packages, isLoading } = useGetPackages();
  const { data: coupon } = useGetGlobalCoupon();
  
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-10 mt-4 px-6">
        {packages &&
          packages.length > 0 &&
          packages?.map((plan: IPackage, index: number) => (
            <section key={index} className="flex flex-col items-center">
              {/* header */}
              <h1 className="bg-[#B0CBF4] py-2 text-center font-bold rounded-md w-full">
                {plan.type}
              </h1>
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl bg-white mt-4 w-full"
              >
                {/* bussiness name & price */}
                <div className="bg-[#E6EEFC] py-6  rounded-2xl text-center">
                  <h1 className="text-xl 2xl:text-2xl font-medium">
                    {plan.type}
                  </h1>
                  {/* price & month */}
                  <div className="flex items-center justify-center">
                    <h1 className="text-2xl 2xl:text-3xl font-bold">
                      {plan.currency || "$"}
                      {plan.regularPrice}
                    </h1>
                    <p>/{plan.interval || "month"}</p>
                  </div>
                </div>

                {/* features */}
                <div className="pt-10 pb-14">
                  {plan.features &&
                    plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 my-2 ml-5"
                      >
                        {index !== 3 && (
                          <p className="h-1.5 w-1.5 rounded-full bg-black" />
                        )}

                        <p>{feature}</p>
                      </div>
                    ))}
                </div>

                <div className="flex items-center justify-center mb-10">
                  <SubscriptionModal
                    packageData={plan}
                    trigger={
                      <button className="bg-[#0057DC] px-12 rounded-md text-white font-medium py-3 cursor-pointer">
                        Edit Now
                      </button>
                    }
                  />
                </div>

                {/* background color */}
                <div className="bg-[#B0CBF4] w-28 h-28 rotate-45 absolute -bottom-1 -left-1 transition -translate-x-1/2 translate-y-1/2"></div>
                <div className="bg-[#B0CBF4] w-28 h-28 rotate-45 absolute -bottom-1 -right-1 transition translate-x-1/2 translate-y-1/2"></div>
              </div>
            </section>
          ))}
      </div>
      {/* promotion offer */}
      <PromotionOffer coupon={coupon} />
    </section>
  );
}
