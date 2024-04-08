import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image src="/logo.png" alt="Llama blog" width={50} height={50} />
                    <h1 className={styles.logoText}>Llama blog</h1>
                </div>
                
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ea accusantium quidem,
                    voluptatum recusandae corporis saepe libero dignissimos blanditiis, provident numquam.
                    Officiis animi quasi nesciunt dignissimos a, aut minus voluptatem modi nulla. Velit facere
                    soluta voluptatum voluptatem ullam, vel quam, omnis, odio magnam corrupti esse. Ratione
                    fugiat facilis rerum aliquam sequi at quia, incidunt libero et, quos doloribus, odit
                    recusandae quae dolore voluptas sit odio numquam repellendus cupiditate similique. Facilis
                    quos in voluptatum ullam totam quas quaerat sunt error officiis deserunt? Quo in magni
                    atque repellat deserunt asperiores, possimus accusamus, doloremque necessitatibus aliquam
                    ipsam? Placeat error ea omnis iure blanditiis.
                </p>
                
                <div className={styles.icons}>
                    <Image src="/facebook.png" alt="" width={18} height={18} />
                    <Image src="/instagram.png" alt="" width={18} height={18} />
                    <Image src="/tiktok.png" alt="" width={18} height={18} />
                    <Image src="/youtube.png" alt="" width={18} height={18} />
                </div>
            </div>
            <div className={styles.links}>
                {/* Links */}
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href="/">Homepage</Link>
                    <Link href="/">Blog</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                </div>
                
                {/* Tags */}
                <div className={styles.list}>
                    <span className={styles.listTitle}>Tags</span>
                    <Link href="/">Style</Link>
                    <Link href="/">Fashion</Link>
                    <Link href="/">Coding</Link>
                    <Link href="/">Travel</Link>
                </div>
                
                {/* Social */}
                <div className={styles.list}>
                    <span className={styles.listTitle}>Social</span>
                    <Link href="/">Facebook</Link>
                    <Link href="/">Instagram</Link>
                    <Link href="/">Tiktok</Link>
                    <Link href="/">YouTube</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;
