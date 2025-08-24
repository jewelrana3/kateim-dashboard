import Category from "@/components/dashboard/all-category/category/Category";
import React from "react";
import SubCategory from "@/components/dashboard/all-category/sucCategory/SubCategory";

export default function Allcategory() {
  return (
    <div className="mx-auto max-w-7xl">
      <Category />
      <SubCategory />
    </div>
  );
}
