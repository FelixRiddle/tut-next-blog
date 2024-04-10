// import Navbar from "@/components/navbar/Navbar";
import Featured from "@/components/featured/Featured";
import styles from "./homepage.module.css";
import Link from "next/link";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";
// import Footer from "@/components/footer/Footer";

/**
 * 
 * @returns 
 */
export default function Home({ searchParams }) {
    const page = parseInt(searchParams.page) || 1;
    
    return (
        <div className={styles.container}>
            {/* <Link href="/">Hello</Link> */}
            <Featured />
            <CategoryList />
            
            <div className={styles.content}>
                <CardList page={page} />
                <Menu />
            </div>
        </div>
    );
}
