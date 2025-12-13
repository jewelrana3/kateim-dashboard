"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Month {
  name: string;
  value: number;
}

const months: Month[] = [
  { name: "Jan", value: 1 },
  { name: "Feb", value: 2 },
  { name: "Mar", value: 3 },
  { name: "Apr", value: 4 },
  { name: "May", value: 5 },
  { name: "Jun", value: 6 },
  { name: "Jul", value: 7 },
  { name: "Aug", value: 8 },
  { name: "Sep", value: 9 },
  { name: "Oct", value: 10 },
  { name: "Nov", value: 11 },
  { name: "Dec", value: 12 },
];

interface Props {
  selectedMonth: number;
  onChange: (value: number) => void;
}

export default function MonthDropdown({ selectedMonth, onChange }: Props) {
  return (
    <div className="inline-block relative">
      <Select value={selectedMonth.toString()} onValueChange={(v) => onChange(Number(v))}>
        <SelectTrigger>
          <SelectValue placeholder="Select a month" />
        </SelectTrigger>
        <SelectContent>
          {months.map((month) => (
            <SelectItem key={month.value} value={month.value.toString()}>
              {month.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Arrow */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
        <svg
          className="fill-current h-4 w-4"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 7l3-3 3 3H7z" />
        </svg>
      </div>
    </div>
  );
}
