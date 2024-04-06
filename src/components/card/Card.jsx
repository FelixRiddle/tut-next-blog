import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

/**
 * Card
 */
export default function Card() {
    return (
        <div className={styles.container}>
            {/* Card image */}
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill clasName={styles.image} />
            </div>
            
            {/* Card details */}
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>2024.04.06 - </span>
                    <span className={styles.category}>Culture</span>
                </div>
                <Link href="">
                    <h1>I see you're a man of culture as well.</h1>
                </Link>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis saepe autem
                    omnis numquam qui ad consectetur veritatis officiis laboriosam voluptates quasi
                    doloribus tempora explicabo dolorum soluta sint repellat ipsum, praesentium quas
                    illo, error veniam? Quasi accusamus quia provident corporis quos?
                </p>
                <Link href="" className={styles.link}>
                    Read more...
                </Link>
            </div>
        </div>
    );
}
