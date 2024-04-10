import React from "react";

import Image from "next/image";
import styles from "./singlePage.module.css";
import Menu from "@/components/Menu/Menu";
import Comments from "@/components/comments/Comments";

/**
 * Single page
 */
export default function SinglePage() {
    return (
        <div className={styles.container}>
            {/* Blog information */}
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, unde!</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/p1.png" alt="" fill className={styles.image} />
                        </div>
                        
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>2024.04.09</span>
                        </div>
                    </div>
                </div>
                
                <div className={styles.imageContainer}>
                    <Image src="" alt="" fill className={styles.image} />
                </div>
            </div>
            
            {/* Blog */}
            <div className={styles.content}>
                <div className={styles.post}>
                    
                    {/* Blog description */}
                    <div className={styles.description}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore laborum
                            molestiae architecto sequi porro dicta nulla enim! Dignissimos voluptas
                            at eligendi deleniti alias iste iusto ratione molestiae earum nihil, debitis
                            fugit voluptatibus odio. Quaerat optio, aperiam minus quidem facilis odit
                            explicabo accusamus culpa perspiciatis corporis tempore perferendis, quia veniam. Hic.
                        </p>
                        <h2>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore laborum
                            molestiae architecto sequi porro dicta nulla enim! Dignissimos voluptas
                            at eligendi deleniti alias iste iusto ratione molestiae earum nihil, debitis
                            fugit voluptatibus odio. Quaerat optio, aperiam minus quidem facilis odit
                            explicabo accusamus culpa perspiciatis corporis tempore perferendis, quia veniam. Hic.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore laborum
                            molestiae architecto sequi porro dicta nulla enim! Dignissimos voluptas
                            at eligendi deleniti alias iste iusto ratione molestiae earum nihil, debitis
                            fugit voluptatibus odio. Quaerat optio, aperiam minus quidem facilis odit
                            explicabo accusamus culpa perspiciatis corporis tempore perferendis, quia veniam. Hic.
                        </p>
                    </div>
                    
                    {/* Comments */}
                    <div className={styles.comments}>
                        <Comments />
                    </div>
                </div>
                <Menu></Menu>
            </div>
        </div>
    );
}


