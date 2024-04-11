"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import useSWR from "swr";

import styles from "./comments.module.css";
import getComments from "@/lib/api/getComments.js";
import { useState } from "react";

/**
 * Comments
 * 
 * @returns 
 */
export default function Comments({ postSlug }) {
    const { status } = useSession();
    
    const { data, mutate, isLoading } = useSWR(
        `http://localhost:3005/api/comments?postSlug=${postSlug}`,
        getComments
    );
    
    const [description, setDescription] = useState("");
    
    const handleSubmit = async () => {
        await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({
                description,
                postSlug,
            }),
        });
        
        mutate();
    };
    
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === "authenticated" ? (
                <div className={styles.write}>
                    <textarea
                        placeholder="Write a comment"
                        className={styles.input}
                        onChange={e => setDescription(e.target.value)}>
                        </textarea>
                    <button className={styles.button} onClick={handleSubmit}>Send</button>
                </div>
            ) : (
                <Link href="/login">Login to write a comment</Link>
            )}
            
            <div className={styles.comments}>
                {isLoading ? "Loading..." : data.map(comment => {
                    return (
                        <div className={styles.comment} key={comment._id}>
                            <div className={styles.user}>
                                {comment.user.image && <Image
                                    src={comment.user.image}
                                    alt=""
                                    width={50}
                                    height={50}
                                    className={styles.image}
                                />}
                                
                                <div className={styles.userInfo}>
                                    <span className={styles.username}>{comment.user.name}</span>
                                    <span className={styles.date}>{comment.createdAt.substring(0, 10)}</span>
                                </div>
                            </div>
                            <p className={styles.description}>{comment.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

