import { NextResponse } from "next/server";

import prisma from "@/utils/connect";

/**
 * Get categories
 * 
 * @returns 
 */
export const GET = async() => {
    try {
        console.log(`GET -> Categories`);
        
        const categories = await prisma.category.findMany();
        
        return new NextResponse(JSON.stringify(categories), {
            status: 200,
        });
    } catch(err) {
        console.error(err);
        return new NextResponse(JSON.stringify({
            message: "Something went wrong!"
        }, {
            status: 500,
        }));
    }
}

