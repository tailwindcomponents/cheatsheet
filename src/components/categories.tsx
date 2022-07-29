import React from 'react';
import Masonry from 'react-masonry-css';
import Category from '../modules/models/category';
import CategoryComponent from './category';

const Categories = (props: any) => {
    return (
        <section className="dark:bg-gray-900 lg:pt-24">
            <h1 className="pt-6 text-3xl font-semibold text-center text-gray-800 dark:text-gray-200">
                Tailwind CSS Cheat Sheet
            </h1>

            <p className="max-w-6xl px-4 mx-auto mt-4 text-base text-center text-gray-500 dark:text-gray-400 md:text-lg">
                Find quickly all the class names and CSS properties with this interactive cheat sheet. The only Tailwind CheatSheet you will ever need!
            </p>

            <p className="max-w-6xl px-4 mx-auto mt-4 text-base italic text-center text-gray-500 dark:text-gray-400 md:text-lg">
                “Never memorize something that you can look up.” - Albert Einstein
            </p>
            
            <Masonry
                breakpointCols={{
                    default: 4,
                    1280: 3,
                    1024: 2,
                    768: 2,
                    640: 1
                }}
                className="flex flex-wrap p-4 mx-auto mt-4 "
                columnClassName="w-auto">
                {
                    props.cheatsheet.map((category: Category) => <CategoryComponent key={category.title} category={category} />)
                }
            </Masonry>
        </section>
    );
}

export default Categories;
