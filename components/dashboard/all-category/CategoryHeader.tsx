import { PlusCircle } from "lucide-react";
import { SubCategoryEdit } from "./sucCategory/SubCategoryEdit";
import { CategoryEdit } from "./category/CategoryEdit";

export default function CategoryHeader({ title }: { title: string }) {
  return (
    <>
      <div className="flex items-center justify-between my-6">
        <h1 className="text-base font-semibold text-gray-800">
          {title === "category" ? "All Category" : "Sub Category"}
        </h1>

        <div className="flex items-center gap-4">
          {/* Add Category Button */}
          {title === "category" ? (
            <CategoryEdit
              title="Category"
              trigger={
                <button className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer">
                  <PlusCircle className="w-4 h-4" />
                  <span className="text-sm">
                    {title === "category" ? "All Category" : "Sub Category"}
                  </span>
                </button>
              }
            />
          ) : (
            <SubCategoryEdit
              title="Sub Category"
              trigger={
                <button className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer">
                  <PlusCircle className="w-4 h-4" />
                  <span className="text-sm">
                    {title === "category" ? "All Category" : "Sub Category"}
                  </span>
                </button>
              }
            />
          )}
        </div>
      </div>
    </>
  );
}
