import React, { useState, MouseEvent } from 'react';
import classNames from "classnames";
import InfoTable from './infoTable';
import useBus from 'use-bus';

import SubcategoryType from "../modules/models/subcategory";

const Subcategory = ({ subcategory,shouldHide }: { subcategory : SubcategoryType, shouldHide?:boolean }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleCollapse = (): void => {
        setIsVisible(!isVisible);
    };

    const onClickLink = (event: MouseEvent<HTMLAnchorElement>): void => {
        event.stopPropagation();
    };

    useBus(
        'ui/expand',
        () => setIsVisible(true)
    );

    useBus(
        'ui/collapse',
        () => setIsVisible(false)
    );

    return (
        <div className={shouldHide ?? false ? "hidden" : "block"}>
            <div
              className="flex items-center px-3 py-2 text-gray-700 transition-colors duration-300 transform border-gray-300 cursor-pointer dark:hover:bg-gray-600 dark:text-gray-300 hover:bg-gray-200 hover:text-gray-900 dark:hover:text-gray-100"
              onClick={toggleCollapse}
            >
                <h1 className="flex-1 text-sm tracking-wider">{subcategory.title}</h1>
                <a
                    className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-400 rounded-md dark:bg-gray-700 hover:bg-primary dark:hover:bg-primary"
                    href={subcategory.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClickLink}
                >
                  Docs
                </a>
            </div>
            <div className={classNames('bg-gray-200 dark:bg-gray-700 px-4 overflow-hidden', {
                'hidden': !isVisible
            })}>
                <p className="my-3 font-semibold leading-tight text-gray-800 dark:text-gray-200">{subcategory.description}</p>
                <InfoTable table={subcategory.table} />
            </div>
        </div>
    );
}

export default Subcategory;
