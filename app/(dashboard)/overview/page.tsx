import Card from "@/components/dashboard/overview/Card";
import Chart from "@/components/dashboard/overview/Chart";
import React from "react";

export default function OverView() {
  return (
    <section className="p-5">
      <Card />

      <Chart />
    </section>
  );
}
