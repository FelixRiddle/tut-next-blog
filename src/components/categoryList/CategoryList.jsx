import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import getCategories from "@/lib/api/getCategories";

const CategoryList = async () => {
    const data = await getCategories();
    
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Categories</h1>
            <div className={styles.categories}>
                {data?.map((item, index) => {
                    return (
                        <Link key={item._id} href="/blog?cat=style" className={`${styles.category} ${styles[item.slug]}`}>
                            {item.img && 
                                <Image src={item.img} alt="" width={32} height={32} className={styles.image} />
                            }
                            {item.title}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default CategoryList;
