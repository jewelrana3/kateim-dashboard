import { ArrowBigLeft, Plus } from "lucide-react";
import React from "react";
import SubscriptionModal from "./SubscriptionModal";

export default function Header() {
  return (
    <section className="mt-8 flex items-center justify-between px-10">
      <div className="flex items-center gap-2">
        <span className="bg-[#E6EEFC] p-3 rounded-full">
          <ArrowBigLeft />
        </span>
        <h1 className="text-2xl font-semibold text-[#333333]">Subscriptions</h1>
      </div>
      <div className="flex items-center gap-5">
        <div className="capitalize font-semibold bg-[#FFC823] text-black rounded-md px-2 py-3 flex">
          <Plus />
          promotional offer
        </div>
        <SubscriptionModal
          header="Add Subscriber"
          trigger={
            <div className="capitalize font-semibold bg-[#FFC823] text-black rounded-md px-2 py-3 flex cursor-pointer ">
              <Plus />
              New Package
            </div>
          }
        />
      </div>
    </section>
  );
}
