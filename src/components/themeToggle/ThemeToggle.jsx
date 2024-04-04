"use client";

import Image from "next/image";
import styles from "./themeToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

/**
 * 
 */
export default function ThemeToggle() {
    const { theme } = useContext(ThemeContext);
    
    console.log(`Theme: ${theme}`);
    
    return (
        <div className={styles.container}>
            <Image src="/moon.png" alt="" width={14} height={14}/>
            <Image src="/sun.png" alt="" width={14} height={14}/>
        </div>
    );
}

