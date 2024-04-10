import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

/**
 * Card
 */
export default function Card({ key, post }) {
    return (
        <div className={styles.container} key={key}>
            {/* Card image */}
            {post.img && 
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" fill clasName={styles.image} />
                </div>
            }
            
            {/* Card details */}
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>{post.createdAt.substring(0, 10)} - </span>
                    <span className={styles.category}>{post.categorySlug}</span>
                </div>
                <Link href={`/posts/${item.slug}`}>
                    <h1>{post.title}</h1>
                </Link>
                <p className={styles.description}>{post.description}</p>
                <Link href={`/posts/${item.slug}`} className={styles.link}>
                    Read more...
                </Link>
            </div>
        </div>
    );
}
