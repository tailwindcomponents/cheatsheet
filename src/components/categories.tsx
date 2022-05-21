import React from 'react';
import Masonry from 'react-masonry-css';
import Category from '../modules/models/category';
import CategoryComponent from './category';

const Categories = (props: any) => {
    return (
        <section className="dark:bg-gray-900">
            <Masonry
                breakpointCols={{
                    default: 4,
                    1280: 3,
                    1024: 2,
                    768: 2,
                    640: 1
                }}
                className="flex flex-wrap p-4 mx-auto lg:pt-24"
                columnClassName="w-auto">
                {
                    props.cheatsheet.map((category: Category) => <CategoryComponent key={category.title} category={category} />)
                }
            </Masonry>
        </section>
    );
}

export default Categories;
