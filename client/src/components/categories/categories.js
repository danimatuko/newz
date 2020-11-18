import React from "react";
import CategoryPreview from "../../components/category-preview/category-preview";
import categoriesData from "./categories-data";

// objective: create a CategoryPreview component from the categoriesData

export const Categories = () => {
  const categories = categoriesData;

  return (
    <div className="categories">
      {categories.map(({ categoryId, categoryName ,hebrewName}) => (
        <CategoryPreview key={categoryId} categoryName={categoryName} hebrewName={hebrewName}/>
      ))}
    </div>
  );
};

export default Categories;
