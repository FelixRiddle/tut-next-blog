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
        const cat = searchParams.get("cat");
        
        const query = {
            take: POSTS_PER_PAGE,
            skip: (page - 1) * POSTS_PER_PAGE,
            where: {
                ...(cat && { catSlug: cat })
            }
        };
        
        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count({ where: query.where}),
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


/**
 * Create post
 */
export const POST = async (req) => {
    try {
        const session = await getAuthSession();
        
        if(!session) {
            return new NextResponse({
                message: "Not authenticated"
            }, {
                status: 500,
            });
        }
        
        const body = await req.json();
        const post = await prisma.post.create({
            data: {
                ...body,
                userEmail: session.user.email,
            }
        });
        
        return new NextResponse(JSON.stringify(post), {
            status: 200,
        });
    } catch(err) {
        console.error(err);
        return new NextResponse(JSON.stringify(err), {
            status: 500,
        });
    }
}

