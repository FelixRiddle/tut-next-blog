import React from "react";

import Image from "next/image";
import styles from "./singlePage.module.css";
import Menu from "@/components/Menu/Menu";
import Comments from "@/components/comments/Comments";
import getPost from "@/lib/api/getPost";

/**
 * Single page
 */
export default async function SinglePage({ params }) {
    const { slug } = params;
    
    const post = await getPost(slug);
    
    return (
        <div className={styles.container}>
            {/* Blog information */}
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>
                        {post.title}
                    </h1>
                    <div className={styles.user}>
                        {post.user.img && (
                            <div className={styles.userImageContainer}>
                                <Image src={post.user.img} alt="" fill className={styles.image} />
                            </div>
                        )}
                        
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>{post.user.name}</span>
                            <span className={styles.date}>{post.createdAt.substring(0, 10)}</span>
                        </div>
                    </div>
                </div>
                
                {post?.img && <div className={styles.imageContainer}>
                    <Image src={post.img} alt="" fill className={styles.image} />
                </div>}
            </div>
            
            {/* Blog */}
            <div className={styles.content}>
                <div className={styles.post}>
                    
                    {/* Blog description */}
                    <div className={styles.description} dangerouslySetInnerHTML={{
                        __html: post.description
                    }} />
                    
                    {/* Comments */}
                    <div className={styles.comments}>
                        <Comments postSlug={slug} />
                    </div>
                </div>
                <Menu></Menu>
            </div>
        </div>
    );
}


