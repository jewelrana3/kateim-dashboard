"use client";

import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import YearDropdown from "./YearDropDown";

const data = [
  { name: "Jan", uv: 3000 },
  { name: "Feb", uv: 1500 },
  { name: "Mar", uv: 2800 },
  { name: "Apr", uv: 4200 },
  { name: "May", uv: 3600 },
  { name: "Jun", uv: 3500 },
  { name: "Jul", uv: 2000 },
  { name: "Aug", uv: 5200 },
  { name: "Sep", uv: 5000 },
  { name: "Oct", uv: 4300 },
  { name: "Nov", uv: 4000 },
  { name: "Dec", uv: 6000 },
];

export default function GreenAreaChart() {
  const [year, setYear] = useState("July 2025");
  return (
    <section className="my-2 bg-white rounded-md">
      <div className="flex justify-between p-2">
        <h3 className="mb-4 text-xl">Total revenue monthly</h3>{" "}
        <div>
          <YearDropdown selectedYear={year} onChange={setYear} />{" "}
        </div>
      </div>
      <div style={{ width: "100%", height: 280 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <defs>
              <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0057DC" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#0057DC" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#0057DC"
              fill="url(#colorGreen)"
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
