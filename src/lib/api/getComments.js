/**
 * Get comments
 * 
 * @param {*} url 
 * @returns 
 */
export default async function getComments(url) {
    const res = fetch(url);
    
    const comments = await res.json();
    
    if(!res.ok) {
        const error = new Error(comments.message);
        throw error;
    }
    
    return data;
}
