import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "./menu.module.css";

/**
 * Side menu
 * 
 * @returns 
 */
const Menu = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>{"What's hot"}</h2>
            <h1 className={styles.title}>Most popular</h1>
            
            <div className={styles.items}>
                {/* Example */}
                <Link href="" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>
                    <div className={styles.textContainer}>
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
                <Link href="" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>
                    <div className={styles.textContainer}>
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
                <Link href="" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>
                    <div className={styles.textContainer}>
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
        </div>
    )
}

export default Menu;
