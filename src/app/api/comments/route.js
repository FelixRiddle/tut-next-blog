import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

/**
 * Get all comments of a post
 */
export const GET = async (req) => {
    try {
        const { searchParams } = new URL(req.url);
        
        const postSlug = searchParams.get("postSlug");
        
        const comments = await prisma.comment.findMany({
            where: {
                ...(postSlug && { postSlug })
            },
            include: {
                user: true,
            }
        });
        
        return new NextResponse(JSON.stringify(comments), {
            status: 200,
        });
    } catch(err) {
        console.error(err);
        return new NextResponse(JSON.stringify(err), {
            status: 500,
        });
    }
}

/**
 * Create a comment
 */
export const POST = async (req) => {
    try {
        const session = await getAuthSession();
        
        if(!session) {
            return new NextResponse({
                message: "You must be logged in to create a comment!",
            }, {
                status: 500,
            });
        }
        
        const body = await req.json();
        const comment = await prisma.comment.create({
            data: {
                ...body,
                userEmail: session.user.email,
            }
        });
        
        return new NextResponse(JSON.stringify(comment), {
            status: 200,
        });
    } catch(err) {
        console.error(err);
        return new NextResponse(JSON.stringify(err), {
            status: 500,
        });
    }
}

