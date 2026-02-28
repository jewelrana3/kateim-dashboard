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
import JobResponses from "./selectPage/JobResponses";
import OurClients from "../ourClients/OurClients";

const title = [
  { id: 1, value: "Hero Section" },
  { id: 2, value: "How it work(employer)" },
  { id: 3, value: "How it work(worker)" },
  { id: 4, value: "Why instant labour" },
  { id: 5, value: "Job Responses" },
  { id: 6, value: "Client Say" },
];

export default function Home() {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [isHeroOpen, setIsHeroOpen] = useState(false);

  // Open dialog automatically when Hero Section is selected
  useEffect(() => {
    if (selectedValue === "Hero Section") {
      setIsHeroOpen(true);
    } else if (selectedValue === "How it work(employer)") {
      setIsHeroOpen(true);
    } else if (selectedValue === "How it work(worker)") {
      setIsHeroOpen(true);
    } else if (selectedValue === "Why instant labour") {
      setIsHeroOpen(true);
    } else if (selectedValue === "Job Responses") {
      setIsHeroOpen(true);
    } else if (selectedValue === "Client Say") {
      setIsHeroOpen(true);
    }
  }, [selectedValue]);
  return (
    <section className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between bg-[#F6F6F6] py-5 rounded-md">
        <h2 className="text-3xl font-medium text-gray-800">
          Please select a title to edit or create
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
      {selectedValue === "Hero Section" && <HeroSection />}
      {selectedValue === "How it work(employer)" && <HowWorkEmployee />}
      {selectedValue === "How it work(worker)" && <HowWorker />}
      {selectedValue === "Why instant labour" && <Labour />}
      {selectedValue === "Job Responses" && <JobResponses />}
      {selectedValue === "Client Say" && <OurClients />}
    </section>
  );
}
