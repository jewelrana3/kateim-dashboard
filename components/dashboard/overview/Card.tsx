import { User, CreditCard, DollarSign } from "lucide-react";

export const statCards = [
  {
    title: "Total Employer",
    value: "2000",
    icon: User,
  },
  {
    title: "Total Worker",
    value: "3000",
    icon: User,
  },
  {
    title: "Total Credit Sales",
    value: "5000+",
    icon: CreditCard,
  },
  {
    title: "Total Revenue",
    value: "$2562",
    icon: DollarSign,
  },
];

export default function Card() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-2 z">
      {statCards.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="bg-white shadow-sm rounded-md p flex flex-col items-center text-center "
          >
            {/* Header with Icon and title */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mt-5">
              <Icon className="w-4 h-4" />
              <span className="text-xl font-medium">{item.title}</span>
            </div>

            {/* Value */}
            <div className="text-2xl font-semibold text-black mb-4 p-2">
              {item.value}
            </div>

            {/* Bottom Decoration */}
            <div className="w-full h-6 bg-[#B0CBF4] rounded-t-full" />
          </div>
        );
      })}
    </div>
  );
}
