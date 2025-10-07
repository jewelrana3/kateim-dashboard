"use client";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useState } from "react";

const COLORS = ["#0056e0", "#b7d5f8"]; // Primary and secondary segment colors

const data = [
  { name: "Used", value: 20 },
  { name: "Remaining", value: 80 },
];

export default function CircleChart() {
  const [selectedYear, setSelectedYear] = useState("2025");

  return (
    <div className="h-full p-4 bg-[#FFFFFF] shadow-md rounded-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">Total Employer</h2>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="border border-gray-400 rounded px-2 py-1 text-sm"
        >
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>
      </div>

      <div className="relative w-full h-60">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              innerRadius={80}
              outerRadius={120}
              dataKey="value"
              startAngle={100}
              endAngle={-270}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Center Percentage Label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[70px] h-[70px] rounded-full bg-[#b7d5f8] flex items-center justify-center text-center text-sm font-semibold text-black">
            20%
          </div>
        </div>
      </div>
    </div>
  );
}
