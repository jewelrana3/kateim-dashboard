'use client'
import { Pencil } from "lucide-react";
import CategoryHeader from "../CategoryHeader";
import { SubCategoryEdit } from "./SubCategoryEdit";
import CategoryDelete from "./CategoryDelete";
import { useGetCategories } from "@/lib/query/hooks/dashboard/category";


export default function SubCategory({}) {

  const { data: categories, isLoading } = useGetCategories();

  return (
    <>
      <CategoryHeader title="sub" />
      <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-3 ">
        
        
        {categories?.map((category, index) => (
          <div key={index} className="border p-4 rounded-md">
            {/* Title with edit icon */}
            <div className="flex items-center justify-between border-b pb-1 mb-2">
              <h2 className="font-semibold text-base">{category.title}</h2>
              <div className="flex items-center justify-center gap-2">
                <div>
                  <SubCategoryEdit
                    category={category}
                    title="Edit Category"
                    trigger={
                      <button className=" text-blue-600 cursor-pointer">
                        <Pencil className="w-5 h-5" />
                      </button>
                    }
                  />
                </div>

                <div>
                  <CategoryDelete _id={category._id} />
                </div>
              </div>
            </div>

            {/* Job list */}
            <ul className="list-disc pl-4 space-y-1 text-sm">
              {category.subCategories.map((job, i) => (
                <li key={i}>{job}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
