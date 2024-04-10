
/**
 * Get posts
 * 
 * @returns 
 */
export default async function getPosts(page, cat) {
    const res = await fetch(`http://localhost:3005/api/posts?page=${page}&cat=${cat || ""}`, {
        cache: "no-store",
    });
    
    if(!res.ok) {
        throw new Error("Failed");
    }
    
    return res.json();
}
