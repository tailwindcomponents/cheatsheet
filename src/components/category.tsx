import React from 'react';
import Subcategory from '../modules/models/subcategory';
import SubcategoryComponent from './subcategory';
import classNames from "classnames";

const Category = ({ category }: any) => {
  let hasVisibleContent = category.content.filter((el: Subcategory) => el.table.length).length > 0
  return (
    <div className={classNames("rounded-md bg-gray-100 pt-4 m-2 overflow-hidden", {
      "bg-opacity-20": !hasVisibleContent,
    })}>
      <h1 className={classNames("px-3 py-2 mx-3 mb-2 font-bold text-gray-800 bg-gray-200 rounded-md", {
        "bg-opacity-10": !hasVisibleContent,
        "text-opacity-20": !hasVisibleContent
      })}>{category.title}</h1>
      {
        category.content.map((subcategory: Subcategory, index: Number) => {
          return subcategory.table.length > 0 && <SubcategoryComponent key={'Subcat-' + index} subcategory={subcategory} />;
        })
      }
    </div>
  )
};

export default Category;
