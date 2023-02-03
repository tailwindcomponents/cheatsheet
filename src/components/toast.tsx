import React from "react";

export const Toast = ({ text }: { text: string }) => {

    return (
        <div
            className="fixed z-10 p-4 m-4 font-medium text-white rounded-lg shadow-lg top-20 right-6 bg-primary"
            role="alert"
        >
            <p className="text-sm">"{text}" copied into your clipboard </p>
        </div>
    );
};