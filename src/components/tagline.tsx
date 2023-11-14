import React from "react";

const Tagline = () => (
    <section className="dark:bg-gray-900 lg:pt-24">
        <h1 className="pt-6 text-3xl font-semibold text-center text-gray-800 dark:text-gray-200">
            Tailwind CSS Cheat Sheet
        </h1>

        <p className="max-w-6xl px-4 mx-auto mt-4 text-base text-center text-gray-500 dark:text-gray-400 md:text-lg">
            Find quickly all the class names and CSS properties with this interactive cheat sheet. The only Tailwind CheatSheet you will ever need!
        </p>
        <div className="flex items-center justify-center max-w-2xl px-4 mx-auto mt-4 text-base text-center text-gray-500 dark:text-gray-400 md:text-lg">
            <a href="https://www.material-tailwind.com/roots-of-ui-ux-design?ref=tc-cheatsheet" target="_blank">
                <img src="./banner-root-ui-ux-book.png" alt="Roots of UI/UX Design - Learn to Develop Intuitive Web Experiences." className="rounded-lg"/>
            </a>
        </div>

        <p className="max-w-6xl px-4 mx-auto mt-4 text-base italic text-center text-gray-500 dark:text-gray-400 md:text-lg">
            “Never memorize something that you can look up.” - Albert Einstein
        </p>
    </section>
);

export default Tagline;
