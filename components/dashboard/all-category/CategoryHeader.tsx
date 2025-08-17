import { Pencil, PlusCircle } from "lucide-react";
import { CategoryEdit } from "./CategoryEdit";

export default function CategoryHeader() {
  return (
    <>
      <div className="flex items-center justify-between my-6">
        <h1 className="text-base font-semibold text-gray-800">All Category</h1>

        <div className="flex items-center gap-4">
          {/* Edit Icon Button */}

          {/* Add Category Button */}
          <CategoryEdit
            title={true}
            trigger={
              <button className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
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
