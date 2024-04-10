import React from "react";

import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";
import getPosts from "@/lib/api/getPosts";

const CardList = () => {
    const data = getPosts();
    
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recent posts</h1>
            <div className={styles.posts}>
                <div className={styles.post}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <Pagination />
        </div>
    )
}

export default CardList;
