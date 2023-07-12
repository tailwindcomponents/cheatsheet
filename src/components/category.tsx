import React from 'react';
import Category from "../modules/models/category";
import Subcategory from '../modules/models/subcategory';
import SubcategoryComponent from './subcategory';

const Category = ({ category } : { category: Category }) => {
  return (
    <div className={"rounded-md bg-gray-100 dark:bg-gray-800 pt-4 m-2 overflow-hidden"}>
      <h1 className={"px-3 py-2 mx-3 mb-2 font-bold text-gray-800 dark:bg-gray-700 dark:text-gray-200 tracking-wider bg-gray-200 rounded-md"}>
        {category.title}
      </h1>
      {
        category.content.map((subcategory: Subcategory, index: Number) => {
          return subcategory.table.length > 0 && <SubcategoryComponent key={'Subcat-' + index} subcategory={subcategory} />;
        })
      }
    </div>
  )
};

export default Category;
