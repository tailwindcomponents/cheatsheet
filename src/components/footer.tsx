import React from 'react';

const Footer = () => (
    <footer className="mt-auto dark:bg-gray-900">
        <div className="container px-6 pt-16 mx-auto">
            <div className="flex flex-col items-center">
                <div className="py-6 text-center sm:w-2/3">
                    <p className="text-sm text-gray-600 dark:text-gray-200">© Copyright {(new Date().getFullYear())} by <a href="https://github.com/tailwindcomponents" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Tailwind Components</a></p>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
