"use client";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const COLORS = ["#0056e0", "#b7d5f8"]; // Primary and secondary segment colors

const data = [
  { name: "Used", value: 20 },
  { name: "Remaining", value: 80 },
];

const months = [
  "Jan 2025",
  "Feb 2025",
  "Mar 2025",
  "Apr 2025",
  "May 2025",
  "Jun 2025",
  "Jul 2025",
  "Aug 2025",
  "Sep 2025",
  "Oct 2025",
  "Nov 2025",
  "Dec 2025",
];

export default function CircleChart() {
  const [selectedYear, setSelectedYear] = useState("Jan 2025");

  return (
    <div className="h-full p-4 bg-[#FFFFFF] shadow-md rounded-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">Total Employer</h2>
        <Select value={selectedYear} onValueChange={setSelectedYear}>
          <SelectTrigger>
            <SelectValue placeholder="Select a year" />
          </SelectTrigger>
          <SelectContent>
            {months.map((year) => (
              <SelectItem key={year} value={year}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
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
