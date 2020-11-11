import React from "react";
import CategoryPreview from "../../components/category-preview/category-preview";

export const Categories = () => {
  const categories = [
    {
      id: 1,
      categoryName: "business",
    },
    {
      id: 2,
      categoryName: "entertainment",
    },
    {
      id: 3,
      categoryName: "health",
    },
    {
      id: 4,
      categoryName: "sports",
    },
    {
      id: 5,
      categoryName: "technology",
    },
  ];

  return (
    <div className="categories">
      {categories.map(({ id, categoryName }) => (
        <CategoryPreview key={id} categoryName={categoryName} />
      ))}
    </div>
  );
};

export default Categories;
