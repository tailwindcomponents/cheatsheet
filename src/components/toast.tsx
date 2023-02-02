import React from "react";

export const Toast = ({ text }: { text:string }) => {

    return (
            <div
                className="fixed top-1/4 left-1/3 p-4 m-4 bg-primary text-slate-900 text-white rounded-lg shadow-lg z-10"
                role="alert"
            >
                <p className="text-sm">"{text}" copied into your clipboard </p>
            </div>
    );
};