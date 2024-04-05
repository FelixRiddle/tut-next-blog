import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey, this is Felix blog</b>,
                discover my stories and creative ideas!
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Title</h1>
                    <p className={styles.postDescription}>Description</p>
                    <button className={styles.postButton}>Read more</button>
                </div>
            </div>
        </div>
    )
}

export default Featured;
