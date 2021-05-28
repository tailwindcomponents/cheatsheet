import React, { useState, MouseEvent } from 'react';
import classNames from "classnames";
import InfoTable from './infoTable';
import useBus from 'use-bus';

const Subcategory = ({ subcategory }: any) => {
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
        <div>
            <div
              className="flex items-center px-3 py-2 text-gray-700 border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-gray-900"
              onClick={toggleCollapse}
            >
                <h1 className="flex-1 font-mono text-sm">{subcategory.title}</h1>
                <a
                  className="px-2 py-1 text-xs font-bold text-white uppercase bg-gray-400 rounded-md hover:bg-primary"
                  href={subcategory.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClickLink}
                >
                  Docs
                </a>
            </div>
            <div className={classNames('bg-gray-200 px-4 overflow-hidden', {
                'h-0': !isVisible
            })}>
                <p className="my-3 font-semibold leading-tight text-gray-800">{subcategory.description}</p>
                <InfoTable table={subcategory.table} />
            </div>
        </div>
    );
}

export default Subcategory;
