import { NextResponse } from "next/server";

import prisma from "@/utils/connect";

export const POSTS_PER_PAGE = 5;

/**
 * Posts get
 */
export const GET = async(req) => {
    try {
        const { searchParams } = new URL(req.url);
        
        const page = searchParams.get("page");
        
        const query = {
            take: POSTS_PER_PAGE,
            skip: (page - 1) * POSTS_PER_PAGE,
        };
        
        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count(),
        ]);
        
        return new NextResponse(JSON.stringify({
            posts,
            count,
        }), {
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

