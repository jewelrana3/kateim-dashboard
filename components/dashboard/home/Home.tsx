"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React, { useEffect, useState } from "react";
import HeroSection from "./selectPage/HeroSection";
import Labour from "./selectPage/Labour";

import HowWorker from "./selectPage/HowWorker";
import HowWorkEmployee from "./selectPage/HowWorkEmployee";

const title = [
  { id: 1, value: "hero Section" },
  { id: 2, value: "how it work(employer)" },
  { id: 3, value: "how it work(worker)" },
  { id: 4, value: "why instant labour" },
  //   { id: 5, value: "Why Chose Instantlabour" },
  //   { id: 6, value: "Our Vision" },
];

export default function Home() {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [isHeroOpen, setIsHeroOpen] = useState(false);

  // Open dialog automatically when Hero Section is selected
  useEffect(() => {
    if (selectedValue === "hero Section") {
      setIsHeroOpen(true);
    } else if (selectedValue === "how it work(employer)") {
      setIsHeroOpen(true);
    } else if (selectedValue === "how it work(worker)") {
      setIsHeroOpen(true);
    } else if (selectedValue === "why instant labour") {
      setIsHeroOpen(true);
    }
  }, [selectedValue]);
  return (
    <section className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between bg-[#F6F6F6] py-5 rounded-md">
        <h2 className="text-base font-medium text-gray-800">
          Home Us Landing Page
        </h2>

        <div className="flex items-center space-x-5">
          {/* <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 cursor-pointer">
            <Edit className="w-4 h-4" />
          </button> */}

          <Select
            onValueChange={(value) => setSelectedValue(value)}
            value={selectedValue}
          >
            <SelectTrigger className="w-full cursor-pointer">
              <SelectValue placeholder="Select Title" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {title.map((item) => (
                  <SelectItem key={item.id} value={item.value}>
                    {item.value}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* Modal rendered when selected */}
      {selectedValue === "hero Section" && <HeroSection />}
      {selectedValue === "how it work(employer)" && <HowWorkEmployee />}
      {selectedValue === "how it work(worker)" && <HowWorker />}
      {selectedValue === "why instant labour" && <Labour />}
    </section>
  );
}
