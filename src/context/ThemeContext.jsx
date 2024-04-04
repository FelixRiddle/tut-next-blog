"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext();

/**
 * 
 * @returns 
 */
function getFromLocalStorage() {
    if(typeof window !== 'undefined') {
        const value = localStorage.getItem("theme");
        return value || "light";
    }
}

/**
 * 
 * @param {*} param0 
 * @returns 
 */
export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return getFromLocalStorage()
    });
    // const [theme, setTheme] = useState(getFromLocalStorage());
    
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
}
