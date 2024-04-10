
/**
 * Get posts
 * 
 * @returns 
 */
export default async function getPosts(page) {
    const res = await fetch(`http://localhost:3005/api/posts?page=${page}`, {
        cache: "no-store",
    });
    
    if(!res.ok) {
        throw new Error("Failed");
    }
    
    return res.json();
}
