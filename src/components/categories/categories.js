import React from "react";
import CategoryPreview from "../../components/category-preview/category-preview";
import categoriesData from "./categories-data";

export const Categories = () => {
  const categories = categoriesData;

  return (
    <div className="categories">
      {categories.map(({ id, categoryName }) => (
        <CategoryPreview key={id} categoryName={categoryName} />
      ))}
    </div>
  );
};

export default Categories;
