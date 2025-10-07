import React from "react";
import SubscriptionModal from "./SubscriptionModal";
import PromotionOffer from "./PromotionOffer";

const pricingPlans = [
  {
    name: "STARTER",
    price: "£49.99",
    features: [
      "10 Job Posts",
      "2 Post Boosts ( Job Posting Boost )",
      "No Access To Instant Labour",
    ],
  },
  {
    name: "PRO",
    price: "£99.99",
    features: [
      "25 Job Posts",
      "5 Boosts ( Job Posting Boosts )",
      "No Access To Instant Labour",
    ],
  },
  {
    name: "Business",
    price: "£199.99 ",
    month: "(Per Month)",
    features: [
      "Unlimited Job Posts",
      "15 Boosts ( Job Posting Boost )",
      "Includes Instant Labour Access",
    ],
  },
  {
    name: "Instant Labour",
    price: "£199.99 ",
    month: "(Per Month)",
    features: [
      "Access to all workers anytime anywhere at short notice. No job posting . Just simple finding worker. ",
    ],
  },
];

export default function Subscription() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-10 mt-4 px-6">
        {pricingPlans.map((plan, index) => (
          <section key={index} className="flex flex-col items-center">
            {/* header */}
            <h1 className="bg-[#B0CBF4] py-2 text-center font-bold rounded-md w-full">
              {plan.name}
            </h1>
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-white mt-4 w-full"
            >
              {/* bussiness name & price */}
              <div className="bg-[#E6EEFC] py-6  rounded-2xl text-center">
                <h1 className="text-xl 2xl:text-2xl font-medium">
                  {plan.name}
                </h1>
                {/* price & month */}
                <div className="flex items-center justify-center">
                  <h1 className="text-2xl 2xl:text-3xl font-bold">
                    {plan.price}
                  </h1>
                  <p>{plan.month}</p>
                </div>
              </div>

              {/* features */}
              <div className="pt-10 pb-14">
                {plan.features.map((feature) => (
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
      <PromotionOffer />
    </section>
  );
}
