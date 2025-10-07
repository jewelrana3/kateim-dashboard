import { Pencil } from "lucide-react";
import CategoryHeader from "../CategoryHeader";
import { CategoryEdit } from "./CategoryEdit";
import CategoryDelete from "../sucCategory/CategoryDelete";

const jobCategories = [
  {
    id: 1,
    title: "Construction",
  },
  {
    id: 2,
    title: "Construction",
  },
  {
    id: 3,
    title: "Construction",
  },
  {
    id: 4,
    title: "Construction",
  },
];

export default function Category() {
  return (
    <>
      <CategoryHeader title="category" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  ">
        {jobCategories.map((category, index) => (
          <div
            key={index}
            className="border p-4 rounded-md flex flex-col justify-between"
          >
            {/* Title with edit icon */}
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-base">{category.title}</h2>

              <div>
                <CategoryEdit
                  title="Edit Category"
                  trigger={
                    <button className="ml-2 text-blue-600 cursor-pointer">
                      <Pencil className="w-4 h-4" />
                    </button>
                  }
                />

                <CategoryDelete />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
