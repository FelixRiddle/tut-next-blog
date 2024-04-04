import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
                <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
                <Image src="/tiktok.png" alt="Tik Tok" width={24} height={24} />
                <Image src="/youtube.png" alt="YouTube" width={24} height={24} />
            </div>
            <div className={styles.logo}>Blog of the worlds</div>
            <div className={styles.links}>
                <Link href="/">Homepage</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/about">About</Link>
            </div>
        </div>
    )
}

export default Navbar;
