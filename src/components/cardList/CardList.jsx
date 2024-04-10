import React from "react";

import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";
import getPosts from "@/lib/api/getPosts";
import { POSTS_PER_PAGE } from "@/app/api/posts/route";

/**
 * Card list
 * 
 * @param {*} param0 
 * @returns 
 */
const CardList = ({ page, cat }) => {
    const { posts, count: totalPosts } = getPosts(page, cat);
    
    const hasNext = POSTS_PER_PAGE * (page - 1) > 0;
    const hasPrev = POSTS_PER_PAGE * (page - 1) < POSTS_PER_PAGE - totalPosts;
    
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recent posts</h1>
            <div className={styles.posts}>
                <div className={styles.post}>
                    {posts?.map((post) => {
                        <Card key={post._id} post={post} />
                    })}
                </div>
            </div>
            <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
        </div>
    )
}

export default CardList;
