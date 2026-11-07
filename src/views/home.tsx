import React, { useState, useEffect } from 'react';

import Category from '../modules/models/category';
import { filterCheatsheet } from '../utils/filterCheatsheet';

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

    const search = (text: string) => {
        const newCheatsheet = filterCheatsheet(json, text);

        setCheatsheet(newCheatsheet);
        trackSearch(text);
    };

    return (
        <main className={"tracking-wide font-roboto min-h-screen grid " + (JSON.parse(localStorage.getItem('darkMode') || '{}') ? 'dark bg-gray-900' : '')}>
            <SearchBar search={search} />
            <Categories cheatsheet={cheatsheet} />
            <Footer />
        </main>
    );
}

export default Home;
