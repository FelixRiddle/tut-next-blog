
/**
 * Get post
 * 
 * @returns 
 */
export default async function getPost(slug) {
    const res = await fetch(`http://localhost:3005/api/posts/${slug}`, {
        cache: "no-store",
    });
    
    if(!res.ok) {
        throw new Error("Failed");
    }
    
    return res.json();
}
