import React from 'react';
import classNames from "classnames";
import { copyTextToClipboard } from '../utils/copyTextToClipboard';
                                            
const InfoTable = ({ table }: any) => {
    const parseText = (text: string): any => {
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

    return (
        <table className="w-full mb-4 bg-gray-100 rounded">
            <tbody>
                {
                    table.map((tr: string[], index: Number) => {
                        return (
                            <tr key={'tr-' + index}>
                                {
                                    tr.map((td: string, index: Number) => {
                                        return (
                                            <td 
                                            onClick={async () => { 
                                                await copyTextToClipboard(td).then(() =>
                                                alert(td + " Copied to clipboard")
                                              );
                                             }}
                                            key={'td-' + index}
                                            className={classNames('font-mono cursor-copy text-xs hover:underline p-2 border-b border-gray-300', {
                                                'text-purple-700 whitespace-nowrap': index === 0,
                                                'text-blue-700': index === 1,
                                                'text-gray-500 text-xs': index === 2,
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
    );
}

export default InfoTable;
