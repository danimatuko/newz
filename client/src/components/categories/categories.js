import React from "react";
import CategoryPreview from "../../components/category-preview/category-preview";
import categoriesData from "./categories-data";

// objective: create a CategoryPreview component from the categoriesData

export const Categories = () => {
  const categories = categoriesData;

  return (
    <div className="categories">
      {categories.map(({ id, categoryName ,hebrewName}) => (
        <CategoryPreview key={id} categoryName={categoryName} hebrewName={hebrewName}/>
      ))}
    </div>
  );
};

export default Categories;
