import styles from "./blogPage.module.css";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";

/**
 * 
 * @returns 
 */
export default function BlogPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Style blog</h1>
            <div className={styles.content}>
                <CardList />
                <Menu />
            </div>
        </div>
    );
}

