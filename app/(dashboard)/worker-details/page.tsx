'use client'
import WorkerDetails from "@/components/dashboard/all-worker/WorkerDetails";
import  { useSearchParams } from "next/navigation";
import React from "react";

export default function Worker() {
  //get id from url 
   const searchParams = useSearchParams();
  const id = searchParams.get("id");
  return (
    <div className="mx-auto max-w-7xl p-6">
      <WorkerDetails id={id!} />
    </div>
  );
}
