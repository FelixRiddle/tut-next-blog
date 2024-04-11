import { NextResponse } from "next/server";

import prisma from "@/utils/connect";

export const POSTS_PER_PAGE = 5;

/**
 * Get single post
 */
export const GET = async(req, { params }) => {
    try {
        const { slug } = params;
        
        const post = await prisma.post.update({
            where: {
                slug
            },
            views: {
                increment: 1,
            },
            include: {
                user: true,
            }
        });
        
        return new NextResponse(JSON.stringify(post), {
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

