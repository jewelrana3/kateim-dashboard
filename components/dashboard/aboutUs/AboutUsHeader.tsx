"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React, { useState } from "react";
import AboutSection from "./aboutDropDown/AboutSection";
import WhoWeAre from "./aboutDropDown/WhoWeAre";
import Mission from "./aboutDropDown/Mission";
import WhatWeDo from "./aboutDropDown/WhatWeDo";
import OurVision from "./aboutDropDown/OurVision";
import WhyChoose from "./aboutDropDown/WhyChoose";

const title = [
  { id: 1, value: "Hero Section" },
  { id: 2, value: "Who We Are" },
  { id: 3, value: "Our Mission" },
  { id: 4, value: "What We Do" },
  { id: 5, value: "Why Chose Instantlabour" },
  { id: 6, value: "Our Vision" },
];

export default function AboutUsHeader() {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [isHeroOpen, setIsHeroOpen] = useState(false);
  return (
    <>
      <section className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between bg-[#F6F6F6] py-5 rounded-md">
          <h2 className="text-base font-medium text-gray-800">
            About Us Landing Page
          </h2>

          <div className="flex items-center space-x-5">
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
        {selectedValue === "Hero Section" && <AboutSection />}
        {selectedValue === "Who We Are" && <WhoWeAre />}
        {selectedValue === "Our Mission" && <Mission />}
        {selectedValue === "What We Do" && <WhatWeDo />}
        {selectedValue === "Why Chose Instantlabour" && <WhyChoose />}
        {selectedValue === "Our Vision" && <OurVision />}
      </section>
    </>
  );
}
