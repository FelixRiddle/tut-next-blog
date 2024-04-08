import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./menuPosts.module.css";

/**
 * Menu posts
 */
export default function MenuPosts({ withImage } = { withImage: false }) {
    return (
            
        <div className={styles.items}>
            {/* Example */}
            <Link href="/" className={styles.item}>
                <div className={styles.textContainer}>
                    {withImage &&
                        <div className={styles.imageContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                        </div>
                    }
                    
                    <span className={`${styles.category} ${styles.travel}`}>Travel</span>
                    <h3 className={styles.postTitle}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>{"Felix Riddle"}</span>
                        <span className={styles.date}> - 2024.04.07</span>
                    </div>
                </div>
            </Link>
            
            {/* Example */}
            <Link href="/" className={styles.item}>
                <div className={styles.textContainer}>
                    {withImage &&
                        <div className={styles.imageContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                        </div>
                    }
                    
                    <span className={`${styles.category} ${styles.culture}`}>Culture</span>
                    <h3 className={styles.postTitle}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>{"Felix Riddle"}</span>
                        <span className={styles.date}> - 2024.04.07</span>
                    </div>
                </div>
            </Link>
            
            {/* Example */}
            <Link href="/" className={styles.item}>
                <div className={styles.textContainer}>
                    {withImage &&
                        <div className={styles.imageContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                        </div>
                    }
                    
                    <span className={`${styles.category} ${styles.coding}`}>Coding</span>
                    <h3 className={styles.postTitle}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>{"Felix Riddle"}</span>
                        <span className={styles.date}> - 2024.04.07</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

