import React, { useState } from 'react';

import Category from '../modules/models/category';
import cheatsheetData from '../modules/cheatsheet.json';
import { filterCheatsheet } from '../utils/filterCheatsheet';

import SearchBar from '../components/searchBar';
import Categories from '../components/categories';
import Footer from '../components/footer';

const json = cheatsheetData as Category[];

const isDarkMode = (): boolean => {
    try {
        return JSON.parse(localStorage.getItem('darkMode') || 'false') === true;
    } catch {
        return false;
    }
};

const Home = () => {
    const [cheatsheet, setCheatsheet] = useState<Category[]>(json);

    const search = (text: string) => {
        setCheatsheet(filterCheatsheet(json, text));
    };

    return (
        <main className={"tracking-wide font-roboto min-h-screen grid " + (isDarkMode() ? 'dark bg-gray-900' : '')}>
            <SearchBar search={search} />
            <Categories cheatsheet={cheatsheet} />
            <Footer />
        </main>
    );
}

export default Home;
