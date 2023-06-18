import React, { useState, useEffect } from 'react';

import Category from '../modules/models/category';
import Subcategory from '../modules/models/subcategory';

import { trackView, trackSearch } from '../utils/googleAnalytics';

import SearchBar from '../components/searchBar';
import Categories from '../components/categories';
import Footer from '../components/footer';
import Tagline from '../components/tagline';

const Home = (props: any) => {
    const json: Category[] = require('../modules/cheatsheet.json');
    const [cheatsheet, setCheatsheet] = useState<Category[]>(json);

    useEffect(() => {
        trackView('/cheatsheet');
    }, []);

    const search = (text: string) => {
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
        <main className={"tracking-wide font-roboto min-h-screen grid " + (JSON.parse(localStorage.getItem('darkMode') || '{}') ? 'dark bg-gray-900' : '')}>
            <SearchBar search={search} />
            <Tagline />
            <Categories cheatsheet={cheatsheet} />
            <Footer />
        </main>
    );
}

export default Home;
