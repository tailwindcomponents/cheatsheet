import React, { useState, useEffect } from 'react';
import classNames from "classnames";
import { copyTextToClipboard } from '../utils/copyTextToClipboard';
import { Toast } from "./toast";

const InfoTable = ({ table }: { table: string[][] }) => {
    const [showToast, setShowToast] = useState(false);
    const [toastText, setToastText] = useState("");

    const parseText = (text: string): React.ReactNode => {
        if(text.includes("rgb(") || text === "transparent")
        {
            return <div className="w-6 h-6 border rounded" style={{backgroundColor: text}}></div>
        }

        if(text === "current color")
        {
            return <div className="w-6 h-6 bg-white border rounded"></div>
        }

        return text;
    };

    useEffect(() => {
        if (!showToast) return;
        const timer = setTimeout(() => setShowToast(false), 5000);
        return () => clearTimeout(timer);
    }, [showToast, toastText]);

    function handleClick(td: string) {
        setToastText(td)
        setShowToast(true)
    }

    return (
        <>
            {showToast && <Toast text={toastText} /> }
            <table className="w-full mb-4 bg-gray-100 rounded dark:bg-gray-900">
                <tbody>
                {
                    table.map((tr: string[], index: number) => {
                        return (
                            <tr key={'tr-' + index}>
                                {
                                    tr.map((td: string, index: number) => {
                                        return (
                                            <td
                                                onClick={async () => {
                                                    await copyTextToClipboard(td).then(() => {
                                                            handleClick(td)
                                                        }
                                                    );
                                                }}
                                                key={'td-' + index}
                                                className={classNames('cursor-copy font-mono text-xs hover:underline p-2 border-b border-gray-300 dark:border-gray-700', {
                                                    'text-purple-700 dark:text-purple-300 whitespace-nowrap': index === 0,
                                                    'text-blue-700 dark:text-blue-300': index === 1,
                                                    'text-gray-500 dark:text-gray-300 text-xs': index === 2,
                                                })}>{parseText(td)}</td>
                                        );
                                    })
                                }
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        </>
    );
}

export default InfoTable;
