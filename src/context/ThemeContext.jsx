"use client";

import { createContext, useEffect, useState } from "react";

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
    // const [theme, setTheme] = useState(() => {
    //     return getFromLocalStorage()
    // });
    const [theme, setTheme] = useState(getFromLocalStorage());
    
    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    
    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);
    console.log(`Theme: ${theme}`);
    
    return (
        <ThemeContext.Provider value={{ theme, toggle, }}>
            {children}
        </ThemeContext.Provider>
    );
}
