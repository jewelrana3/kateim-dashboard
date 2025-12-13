"use client";
import { DollarSign } from "lucide-react";
import profile from "../../../public/card/profile.svg";
import Image from "next/image";
import { useGeneralStats } from "@/lib/query/hooks";

type StatCard = {
  title: string;
  value: string | number;
  icon: string;
};

const defaultCards: StatCard[] = [
  { title: "Total Employer", value: 0, icon: profile },
  { title: "Total Worker", value: 0, icon: profile },
  { title: "Total Credit Sales", value: 0, icon: profile },
  { title: "Total Revenue", value: "$0", icon: profile },
];

export default function Card() {
  const { data: stats, isLoading, error } = useGeneralStats();

  // Map stats to cards
  const cards = stats
    ? defaultCards.map((card) => {
      switch (card.title) {
        case "Total Employer":
          return { ...card, value: stats.totalEmployers || 0 };
        case "Total Worker":
          return { ...card, value: stats.totalWorkers || 0 };
        case "Total Credit Sales":
          return { ...card, value: (stats as any).totalSubscription || 0 };
        case "Total Revenue":
          return { ...card, value: `$${stats.totalRevenue || 0}` };
        default:
          return card;
      }
    })
    : defaultCards;

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {defaultCards.map((_, index) => (
          <div
            key={index}
            className="bg-white shadow-sm rounded-md flex flex-col items-center text-center animate-pulse"
          >
            <div className="h-20 w-full bg-gray-200 rounded-t-md"></div>
            <div className="h-10 w-20 bg-gray-200 my-4"></div>
            <div className="w-full h-6 bg-[#B0CBF4] rounded-t-full" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 p-4">
        Failed to load statistics
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-sm rounded-md flex flex-col items-center text-center"
        >
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mt-5">
            <Image src={item.icon} alt="icon" width={20} height={20} />
            <span className="text-xl font-medium">{item.title}</span>
          </div>

          <div className="text-2xl font-semibold text-[#333333] mb-4 p-2">
            {item.value}
          </div>

          <div className="w-full h-6 bg-[#B0CBF4] rounded-t-full" />
        </div>
      ))}
    </div>
  );
}
