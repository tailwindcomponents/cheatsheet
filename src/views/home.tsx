import React, { useState, useEffect } from 'react';

import Category from '../modules/models/category';
import Subcategory from '../modules/models/subcategory';

import { trackView, trackSearch } from '../utils/googleAnalytics';

import SearchBar from '../components/searchBar';
import Categories from '../components/categories';
import Footer from '../components/footer';

const Home = (props: any) => {
    const json: Category[] = require('../modules/cheatsheet.json');
    const [cheatsheet, setCheatsheet] = useState<Category[]>(json);

    useEffect(() => {
        trackView('/cheatsheet');
    }, []);

    const search = (event: any) => {
        const text: string = event.target.value;

        let newCheatsheet: Category[] = json.map((category: Category) => {
            return {
                ...category,
                'content': category.content.map((subcategory: Subcategory) => {
                    return {
                        ...subcategory,
                        // Si el texto de búsqueda existe en el título o la descripción se muestra toda la tabla, si no pues se filtra en ella
                        'table': subcategory.title.includes(text) || subcategory.description.includes(text) ? subcategory.table : subcategory.table.filter(tr => {
                            let isValid = false;

                            tr.forEach(td => {
                                if (!isValid) {
                                    isValid = td.includes(text);
                                }
                            });

                            return isValid;
                        }),
                    };
                }),
            };
        });

        setCheatsheet(newCheatsheet);
        trackSearch(text);
    };

    return (
        <>
            <SearchBar search={search} />
            <div className="fixed bottom-0 my-10 overflow-hidden rounded-md right-6 lg:left-1/4 lg:right-1/4">
                <a href="https://a.paddle.com/v2/click/37973/127422?link=3167" rel="noopener noreferrer" target="_blank">
                    <img className="hidden lg:block" src="https://cdn.devdojo.com/affiliates/tails/970x90.jpg" alt="tails ads" />
                    <img className="h-44 lg:hidden" src="https://cdn.devdojo.com/affiliates/tails/ad-16x9.jpg" alt="tails ads" />
                </a>
            </div>
            <Categories cheatsheet={cheatsheet} />
            <Footer />
        </>
    );
}

export default Home;
