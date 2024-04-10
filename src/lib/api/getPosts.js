
/**
 * Get posts
 * 
 * @returns 
 */
export default async function getPosts() {
    const res = await fetch("http://localhost:3005/api/posts", {
        cache: "no-store",
    });
    
    if(!res.ok) {
        throw new Error("Failed");
    }
    
    return res.json();
}
