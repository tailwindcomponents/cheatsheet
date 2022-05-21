import React, { useRef, useEffect } from 'react';
import { ReactComponent as Logo } from '../images/logo.svg';
import { dispatch } from 'use-bus';

const SearchBar = (props: any) => {
    const tailwindVersion = "3.0.24";
    const searchInput: any = useRef(null);

    useEffect(() => {
        searchInput.current.focus();
    });

    return (
        <div className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 lg:fixed lg:w-full lg:top-0 lg:z-50 lg:left-0">
            <div className="container p-4 mx-auto">
                <div className="flex flex-col lg:items-center lg:justify-center lg:flex-row lg:space-x-4">
                    <div className="flex flex-col items-center sm:flex-row sm:justify-center">
                        <Logo className="object-cover object-left h-8" />
                        <h1 className="flex items-center pl-2 mt-2 text-lg text-gray-600 dark:border-gray-700 dark:text-gray-300 lg:mt-0 sm:ml-2 sm:border-l sm:border-gray-400">Cheatsheet <span className="flex items-center h-5 px-2 ml-2 text-xs font-bold text-white rounded-md bg-primary">{tailwindVersion}</span></h1>
                    </div>

                    <input ref={searchInput} className="h-10 mt-4 text-gray-700 bg-white border border-gray-200 rounded-lg dark:bg-gray-900 lg:mt-0 2xl:w-96 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-primary focus:outline-none focus:ring focus:ring-primary dark:placeholder-gray-400 focus:ring-opacity-20" type="text" placeholder="Search" onChange={props.search} />

                    <div className="flex flex-col mt-4 space-y-3 lg:mt-0 sm:flex-row sm:space-y-0 sm:space-x-3 sm:items-center sm:justify-center">
                        <button onClick={() => dispatch('ui/expand')} className="px-4 py-2 space-x-3 text-sm text-gray-600 transition-colors duration-300 transform border rounded-lg dark:text-gray-200 dark:border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none">Expand <span className="lg:hidden xl:inline">All</span></button>
                        <button onClick={() => dispatch('ui/collapse')} className="px-4 py-2 space-x-3 text-sm text-gray-600 transition-colors duration-300 transform border rounded-lg dark:text-gray-200 dark:border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none">Collapse <span className="lg:hidden xl:inline">All</span></button>
                        <a title="TailwindCSS" href="https://tailwindcomponents.com/" className="flex items-center justify-center h-10 px-4 text-sm font-medium text-center text-white transition-colors duration-300 transform rounded-md lg:h-10 bg-primary hover:bg-primary/70">Back <span className="lg:hidden xl:inline">&nbsp;to components</span></a>
                        <a className="flex items-center justify-center space-x-2 text-gray-700 transition-colors duration-500 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:underline" href="https://github.com/tailwindcomponents/cheatsheet">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 30 30">
                                <path d="M15 1.875C7.75195 1.875 1.875 7.9043 1.875 15.334C1.875 21.2812 5.63672 26.3203 10.8516 28.1016C10.9247 28.1175 10.9994 28.1253 11.0742 28.125C11.5605 28.125 11.748 27.7676 11.748 27.457C11.748 27.1348 11.7363 26.291 11.7305 25.166C11.2963 25.2678 10.8522 25.3209 10.4062 25.3242C7.88086 25.3242 7.30664 23.3613 7.30664 23.3613C6.70898 21.8086 5.84766 21.3926 5.84766 21.3926C4.70508 20.5898 5.8418 20.5664 5.92969 20.5664H5.93555C7.25391 20.6836 7.94531 21.9609 7.94531 21.9609C8.60156 23.1094 9.48047 23.4316 10.2656 23.4316C10.7848 23.4213 11.2959 23.3015 11.7656 23.0801C11.8828 22.2129 12.2227 21.6211 12.5977 21.2812C9.68555 20.9414 6.62109 19.7871 6.62109 14.6309C6.62109 13.1602 7.13086 11.959 7.96875 11.0215C7.83398 10.6816 7.38281 9.31055 8.09766 7.45898C8.19354 7.43604 8.29209 7.42619 8.39062 7.42969C8.86523 7.42969 9.9375 7.61133 11.707 8.8418C13.8572 8.24022 16.1311 8.24022 18.2812 8.8418C20.0508 7.61133 21.123 7.42969 21.5977 7.42969C21.6962 7.42619 21.7947 7.43604 21.8906 7.45898C22.6055 9.31055 22.1543 10.6816 22.0195 11.0215C22.8574 11.9648 23.3672 13.166 23.3672 14.6309C23.3672 19.7988 20.2969 20.9355 17.373 21.2695C17.8418 21.6855 18.2637 22.5059 18.2637 23.7598C18.2637 25.5586 18.2461 27.0117 18.2461 27.4512C18.2461 27.7676 18.4277 28.125 18.9141 28.125C18.9928 28.1253 19.0713 28.1175 19.1484 28.1016C24.3691 26.3203 28.125 21.2754 28.125 15.334C28.125 7.9043 22.248 1.875 15 1.875Z" />
                            </svg>
                            <span className="sm:hidden">Source Code On </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
