
/**
 * Fetch categories
 * 
 * @returns 
 */
export default async function getCategories() {
    const res = await fetch("http://localhost:3005/api/categories", {
        cache: "no-store",
    });
    
    if(!res.ok) {
        throw new Error("Failed");
    }
    
    return res.json();
}
