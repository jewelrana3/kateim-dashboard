const years = ["July 2023", "July 2024", "July 2025"];
interface Props {
  selectedYear: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

export default function YearDropdown({ selectedYear, onChange }: Props) {
  return (
    <div className="inline-block relative">
      <select
        className="appearance-none bg-gray-100 border border-gray-300 rounded-md py-2 px-4 pr-8 text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
        value={selectedYear}
        onChange={(e) => onChange(e.target.value)}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

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
