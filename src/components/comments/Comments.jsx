import styles from "./comments.module.css";

import Link from "next/link";
import Image from "next/image";

/**
 * Comments
 * 
 * @returns 
 */
export default function Comments() {
    const status = "authenticated";
    
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === "authenticated" ? (
                <div className={styles.write}>
                    <textarea placeholder="Write a comment" className={styles.input}></textarea>
                    <button className={styles.button}>Send</button>
                </div>
            ) : (
                <Link href="/login">Login to write a comment</Link>
            )}
            
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image} />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>2024.04.09</span>
                        </div>
                    </div>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod blanditiis
                        deserunt dolorem aperiam tenetur amet corrupti at magnam! Odio, doloremque
                        magnam. Soluta alias doloremque quae illum quam consequatur, ullam nam.
                    </p>
                </div>
            </div>
        </div>
    );
}

