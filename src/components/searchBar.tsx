import React, { useRef, useEffect } from 'react';
import { ReactComponent as Logo } from '../images/logo.svg';
import { dispatch } from 'use-bus';

const SearchBar = (props: any) => {
    const tailwindVersion = "2.1.0";
    const searchInput: any = useRef(null);

    useEffect(() => {
        searchInput.current.focus();
    });

    return (
        <div className="bg-white border-b lg:fixed lg:w-full lg:top-0 lg:left-0">
            <div className="container flex flex-col p-4 mx-auto lg:justify-center lg:items-center lg:flex-row lg:space-x-4">
                <div className="flex flex-col items-center sm:flex-row sm:justify-center">
                    <Logo className="object-cover object-left h-8" />
                    <h1 className="flex items-center pl-2 mt-2 text-lg text-gray-600 lg:mt-0 sm:ml-2 sm:border-l sm:border-gray-400">Cheatsheet <span className="flex items-center h-5 px-2 ml-2 text-xs font-bold text-white rounded-md bg-primary">{tailwindVersion}</span></h1>
                </div>
                
                <input ref={searchInput} className="h-10 mt-4 border-gray-200 rounded-md lg:mt-0 lg:w-96 focus:border-teal-500 focus:ring focus:ring-primary focus:ring-opacity-40" type="text" placeholder="Search" onChange={props.search} />

                <div className="flex flex-col mt-4 space-y-3 lg:mt-0 sm:flex-row sm:space-y-0 sm:space-x-3 sm:justify-center">
                    <button onClick={() => dispatch('ui/expand')} className="px-4 py-2 space-x-3 text-gray-600 transition-colors duration-200 transform border rounded-lg hover:bg-gray-100 focus:outline-none">Expand <span className="lg:hidden xl:inline">All</span></button>
                    <button onClick={() => dispatch('ui/collapse')} className="px-4 py-2 space-x-3 text-gray-600 transition-colors duration-200 transform border rounded-lg hover:bg-gray-100 focus:outline-none">Collapse <span className="lg:hidden xl:inline">All</span></button>
                    <a title="TailwindCSS" href="https://tailwindcomponents.com/" className="px-4 py-2 font-semibold text-center text-white rounded-md bg-primary hover:bg-teal-300">Back <span className="lg:hidden xl:inline">to components</span></a>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
