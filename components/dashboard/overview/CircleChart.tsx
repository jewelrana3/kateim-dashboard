"use client";

import useResponsiveRadius from "@/hooks/useResponsiveRadius";
import { useTotalUsers } from "@/lib/query/hooks";
import { useRouter, useSearchParams } from "next/navigation";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import YearDropdown from "./YearDropDown";
import { useState } from "react";

const COLORS = ["#0057DC", "#B0CBF4"];

export default function CircleChart() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentYear = new Date().getFullYear();

  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const { data, isLoading } = useTotalUsers({
    month: selectedMonth,
    year: selectedYear,
  });

  const radius = useResponsiveRadius();

  const used = Number(data?.[0]?.employers);
  const remaining = Math.max(0, 100 - used);

  const chartData = [
    { name: "Used", value: used },
    { name: "Remaining", value: remaining },
  ];

  const handleYearChange = (year: string) => {
    const newYear = Number(year);
    setSelectedYear(newYear);

    const params = new URLSearchParams(searchParams.toString());
    params.set("years", year);

    router.replace(`?${params.toString()}`);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center mt-32">Loading...</div>
    );
  }

  return (
    <div className="h-full p-4 bg-white shadow-md rounded-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-[18px] text-gray-700 font-semibold capitalize">
          Total employer
        </h2>

        <YearDropdown
          selectedYear={selectedYear.toString()}
          onChange={handleYearChange}
        />
      </div>

      <div className="relative w-full h-[200px] xl:h-[230px]">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              innerRadius={radius - 40}
              outerRadius={radius}
              startAngle={90}
              endAngle={-270}
            >
              {chartData.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[70px] h-[70px] rounded-full bg-[#B0CBF4] flex items-center justify-center text-sm font-semibold">
            {Math.min(used, 100)}%
          </div>
        </div>
      </div>
    </div>
  );
}
