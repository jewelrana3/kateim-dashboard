import Header from "@/components/dashboard/subscription/Header";
import Subscription from "@/components/dashboard/subscription/Subscription";
import { Plus } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <div className="px-8 ">
      <Header />
      {/* subscription card */}
      <Subscription />
    </div>
  );
}
