import Link from "next/link";
import React from "react";

import styles from "./menu.module.css";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

/**
 * Side menu
 * 
 * @returns 
 */
const Menu = () => {
    return (
        <div className={styles.container}>
            {/* First navbar */}
            <h2 className={styles.subtitle}>{"What's hot"}</h2>
            <h1 className={styles.title}>Most popular</h1>
            
            <MenuPosts></MenuPosts>
            
            {/* Discover by topic */}
            {/* This has to be a component */}
            <h2 className={styles.subtitle}>Discover by topic</h2>
            <h1 className={styles.title}>Categories</h1>
            <MenuCategories />
            
            {/* --- Second navbar --- */}
            <h2 className={styles.subtitle}>Chosen by the editor</h2>
            <h1 className={styles.title}>Editors pick</h1>
            
            <MenuPosts withImage={true}></MenuPosts>
        </div>
    )
}

export default Menu;
