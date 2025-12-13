"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { useSearchParams, useRouter } from "next/navigation";
import MonthDropdown from "./MonthDropdown";
import YearDropdown from "./YearDropDown";
import { useTotalUsers } from "@/lib/query/hooks";

type EmployerWorkerData = {
  employers: number;
  workers: number;
};

const COLORS = ["#0056e0", "#b7d5f8"]; // Employers, Workers

export default function CircleChart() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  const year = Number(searchParams.get("year")) || currentYear;
  const month = Number(searchParams.get("month")) || currentMonth;

  // Use TanStack Query hook
  const { data, isLoading } = useTotalUsers({ year, month });

  const handleYearChange = (selectedYear: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("year", selectedYear);
    router.replace(`?${params.toString()}`);
  };

  const handleMonthChange = (selectedMonth: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("month", selectedMonth.toString());
    router.replace(`?${params.toString()}`);
  };

  // Default data if loading or no data
  const chartData = data
    ? [
      { name: "Employers", value: (data as any).employers || 0 },
      { name: "Workers", value: (data as any).workers || 0 },
    ]
    : [
      { name: "Employers", value: 0 },
      { name: "Workers", value: 0 },
    ];

  const total = chartData[0].value + chartData[1].value;

  return (
    <div className="h-full p-4 bg-white shadow-md rounded-lg">
      <div className="flex items-center justify-between mb-4 gap-2">
        <h2 className="text-lg font-medium">Total Users</h2>
        <div className="flex gap-2">
          <MonthDropdown selectedMonth={month} onChange={handleMonthChange} />
          <YearDropdown selectedYear={year.toString()} onChange={handleYearChange} />
        </div>
      </div>

      {isLoading ? (
        <div className="relative w-full h-60 flex items-center justify-center">
          <div className="animate-pulse text-gray-400">Loading...</div>
        </div>
      ) : (
        <div className="relative w-full h-60">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={chartData}
                innerRadius={80}
                outerRadius={120}
                dataKey="value"
                startAngle={100}
                endAngle={-270}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number, name: string) => [`${value}`, name]}
              />
            </PieChart>
          </ResponsiveContainer>

          {/* Legend */}
          <div className="absolute bottom-2   gap-4">
            {chartData.map((item, index) => {
              const percent = total ? Math.round((item.value / total) * 100) : 0;
              return (
                <div key={item.name} className="flex items-center gap-1">
                  <div
                    className="w-3 h-3 rounded-sm"
                    style={{ backgroundColor: COLORS[index] }}
                  />
                  <span className="text-sm font-medium">
                    {item.name}: {percent}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
