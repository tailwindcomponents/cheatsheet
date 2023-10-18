import React, { useState } from "react";
import CategoryType from "../modules/models/category";
import Subcategory from "../modules/models/subcategory";
import SubcategoryComponent from "./subcategory";

const ChevronDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

const ArrowDown = ({
  action,
  value,
}: {
  action: () => void;
  value: boolean;
}) => {
  return (
    <span
      onClick={action}
      className={value ? "rotate-180" : "rotate-0"}
    >
      <ChevronDown />
    </span>
  );
};

const Category = ({ category }: { category: CategoryType }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => {
    setIsOpen((p) => !p);
  };
  return (
    <div
      className={
        "rounded-md bg-gray-100 dark:bg-gray-800 pt-4 m-2 overflow-hidden"
      }
    >
      <div
        className={
          "flex justify-center font-bold text-gray-800 dark:bg-gray-700 dark:text-gray-200 tracking-wider bg-gray-200 rounded-md px-3 py-2 mx-3 mb-2"
        }
      >
        <h1 className={"grow "}>{category.title}</h1>
        <ArrowDown action={toggle} value={isOpen} />
      </div>
      {
        category.content.map((subcategory: Subcategory, index: Number) => {
          return (
            subcategory.table.length > 0 && (
              <SubcategoryComponent
                key={"Subcat-" + index}
                subcategory={subcategory}
                shouldHide={!isOpen}
              />
            )
          );
        })}
    </div>
  );
};

export default Category;
