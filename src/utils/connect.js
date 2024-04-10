import { PrismaClient } from "@prisma/client";

/**
 * Create prisma client
 * 
 * @returns 
 */
function createPrismaClient() {
    if(process.env.NODE_ENV === "production") {
        const prisma = new PrismaClient();
        
        return prisma;
    } else {
        if(!global.prisma) {
            global.prisma = new PrismaClient();
        }
        
        return global.prisma;
    }
}

// Create and export
const prisma = createPrismaClient();

export default prisma;
