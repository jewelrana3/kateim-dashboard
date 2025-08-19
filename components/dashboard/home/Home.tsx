"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Edit } from "lucide-react";
import React, { useEffect, useState } from "react";
import HomeEdit from "./HomeEdit";
import HeroSection from "./modalFrom/HeroSection";
import { Span } from "next/dist/trace";
import Labour from "./modalFrom/Labour";
import HowWork from "./modalFrom/HowWork";
import HowWorker from "./modalFrom/HowWorker";

const title = [
  { id: 1, value: "Hero Section" },
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
    if (selectedValue === "Hero Section") {
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
    <>
      <div className="flex items-center justify-between bg-[#F6F6F6] p-4 rounded-md">
        <h2 className="text-base font-medium text-gray-800">
          Home Us Landing Page
        </h2>

        <div className="flex items-center space-x-5">
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 cursor-pointer">
            <Edit className="w-4 h-4" />
          </button>

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
      {/* Modal rendered when selected */};
      {selectedValue === "Hero Section" && (
        <HeroSection
          open={isHeroOpen}
          onOpenChange={setIsHeroOpen}
          trigger={<span className="text-xl">Hero Section</span>} // Not needed since you're using `open` manually
        />
      )}
      {selectedValue === "how it work(employer)" && (
        <HowWork
          open={isHeroOpen}
          onOpenChange={setIsHeroOpen}
          trigger={<span className="text-xl"></span>} // Not needed since you're using `open` manually
        />
      )}
      {selectedValue === "how it work(worker)" && (
        <HowWorker
          open={isHeroOpen}
          onOpenChange={setIsHeroOpen}
          trigger={<span className="text-xl"></span>} // Not needed since you're using `open` manually
        />
      )}
      {selectedValue === "why instant labour" && (
        <Labour
          open={isHeroOpen}
          onOpenChange={setIsHeroOpen}
          trigger={<span className="text-xl"></span>} // Not needed since you're using `open` manually
        />
      )}
    </>
  );
}
