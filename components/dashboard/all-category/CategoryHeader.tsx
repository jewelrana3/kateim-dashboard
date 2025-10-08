import { PlusCircle } from "lucide-react";
import { SubCategoryEdit } from "./sucCategory/SubCategoryEdit";
import { CategoryEdit } from "./category/CategoryEdit";

export default function CategoryHeader({ title }: { title: string }) {
  return (
    <>
      <div className="flex items-center justify-end my-6">
        <div className="flex items-center gap-4">
          <SubCategoryEdit
            title="Add Category"
            trigger={
              <button className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer">
                <PlusCircle className="w-4 h-4" />
                <span className="text-sm">Add Category</span>
              </button>
            }
          />
        </div>
      </div>
    </>
  );
}
