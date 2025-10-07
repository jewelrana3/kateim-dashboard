import { Pencil } from "lucide-react";
import CategoryHeader from "../CategoryHeader";
import { SubCategoryEdit } from "./SubCategoryEdit";
import CategoryDelete from "./CategoryDelete";

const jobCategories = [
  {
    id: 1,
    title: "Construction",
    jobs: [
      "Bricklaying",
      "Carpentry & Joinery",
      "Electrical Work",
      "Plumbing & Heating",
      "General Labourer",
    ],
  },
  {
    id: 2,
    title: "Construction",
    jobs: [
      "Bricklaying",
      "Carpentry & Joinery",
      "Electrical Work",
      "Plumbing & Heating",
      "General Labourer",
    ],
  },
  {
    id: 3,
    title: "Construction",
    jobs: [
      "Bricklaying",
      "Carpentry & Joinery",
      "Electrical Work",
      "Plumbing & Heating",
      "General Labourer",
    ],
  },
  {
    id: 4,
    title: "Construction",
    jobs: [
      "Bricklaying",
      "Carpentry & Joinery",
      "Electrical Work",
      "Plumbing & Heating",
      "General Labourer",
    ],
  },
];

export default function SubCategory({}) {
  return (
    <>
      <CategoryHeader title="sub" />
      <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-3 ">
        {jobCategories.map((category, index) => (
          <div key={index} className="border p-4 rounded-md">
            {/* Title with edit icon */}
            <div className="flex items-center justify-between border-b pb-1 mb-2">
              <h2 className="font-semibold text-base">{category.title}</h2>
              <div className="flex items-center justify-center gap-2">
                <div>
                  <SubCategoryEdit
                    title="Edit Sub Category"
                    trigger={
                      <button className=" text-blue-600 cursor-pointer">
                        <Pencil className="w-5 h-5" />
                      </button>
                    }
                  />
                </div>

                <div>
                  <CategoryDelete />
                </div>
              </div>
            </div>

            {/* Job list */}
            <ul className="list-disc pl-4 space-y-1 text-sm">
              {category.jobs.map((job, i) => (
                <li key={i}>{job}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
