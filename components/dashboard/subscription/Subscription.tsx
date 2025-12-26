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

  console.log("packages", packages);

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-10 mt-4 px-6">
        {packages &&
          packages.length > 0 &&
          packages?.map((plan: IPackage, index: number) => (
            <div key={index} className="flex flex-col">
              {/* header */}
              <h1 className="bg-[#B0CBF4] py-2 text-center font-bold rounded-md w-full">
                {plan.type}
              </h1>

              <div className="relative overflow-hidden rounded-2xl bg-white mt-4 w-full flex flex-col h-full">
                {/* business name & price */}
                <div className="bg-[#E6EEFC] py-6 rounded-2xl text-center">
                  <h1 className="text-xl 2xl:text-2xl font-medium">
                    {plan.type}
                  </h1>

                  <div className="flex items-center justify-center">
                    <h1 className="text-2xl 2xl:text-3xl font-bold">
                      {plan.currency || "$"}
                      {plan.regularPrice}
                    </h1>
                    <p>/{plan.interval || "month"}</p>
                  </div>
                </div>

                {/* features */}
                <div className="pt-10 pb-4">
                  {plan.features?.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 my-2 ml-5"
                    >
                      {index !== 3 && (
                        <span className="h-1.5 w-1.5 rounded-full bg-black" />
                      )}
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>

                {/* description */}
                <div className="px-5 pb-6 text-center">{plan.description}</div>

                {/* button — always bottom */}
                <div className="mt-auto flex justify-center mb-10">
                  <SubscriptionModal
                    packageData={plan}
                    trigger={
                      <button className="bg-[#0057DC] px-12 rounded-md text-white font-medium py-3">
                        Edit Now
                      </button>
                    }
                  />
                </div>

                {/* background decoration */}
                <div className="bg-[#B0CBF4] w-28 h-28 rotate-45 absolute -bottom-1 -left-1 -translate-x-1/2 translate-y-1/2"></div>
                <div className="bg-[#B0CBF4] w-28 h-28 rotate-45 absolute -bottom-1 -right-1 translate-x-1/2 translate-y-1/2"></div>
              </div>
            </div>
          ))}
      </div>
      {/* promotion offer */}
      <PromotionOffer coupon={coupon} />
    </section>
  );
}
