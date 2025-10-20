"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const data = [
  { name: "01", pv: 11 },
  { name: "02", pv: 1 },
  { name: "03", pv: 90 },
  { name: "04", pv: 113 },
  { name: "05", pv: 10 },
  { name: "06", pv: 1 },
  { name: "07", pv: 1 },
  { name: "08", pv: 211 },
  { name: "09", pv: 1 },
  { name: "10", pv: 1 },
  { name: "11", pv: 111 },
  { name: "12", pv: 1 },
  { name: "13", pv: 100 },
  { name: "14", pv: 1 },
  { name: "15", pv: 10 },
  { name: "16", pv: 12 },
  { name: "17", pv: 1 },
  { name: "18", pv: 1 },
  { name: "19", pv: 114 },
  { name: "20", pv: 1 },
  { name: "21", pv: 1 },
  { name: "22", pv: 1 },
  { name: "23", pv: 20 },
  { name: "24", pv: 1 },
  { name: "25", pv: 1 },
  { name: "26", pv: 14 },
  { name: "27", pv: 1 },
  { name: "28", pv: 1 },
  { name: "29", pv: 80 },
  { name: "30", pv: 1 },
  { name: "31", pv: 18 },
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

const maxValue = Math.max(...data.map((data) => data.pv));

const result = data.map((item) => ({
  name: item.name,
  pv: Math.round((item.pv / maxValue) * 100),
}));

export default function Chart() {
  const [selectedMonth, setSelectedMonth] = useState("Jan 2025");

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(e.target.value);
    // Here you can add logic to filter data based on month
  };

  return (
    <section className="shadow-md rounded-lg px-3 text-textGray bg-[#FFFFFF] p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className=" text-xl capitalize text-gray-700 font-medium">
          Total credit sales monthly
        </h1>
        <Select value={selectedMonth} onValueChange={setSelectedMonth}>
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

      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={result}
          margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <Tooltip />
          <Bar dataKey="pv" fill="#0057DC" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}
