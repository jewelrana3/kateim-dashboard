"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  selectedYear: string;
  onChange: (value: string) => void;
}

export default function YearDropdown({ selectedYear, onChange }: Props) {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => (currentYear - i).toString());

  return (
    <div className="inline-block relative">
      <Select value={selectedYear} onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select a year" />
        </SelectTrigger>
        <SelectContent>
          {years.map((year) => (
            <SelectItem key={year} value={year}>
              {year}
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
