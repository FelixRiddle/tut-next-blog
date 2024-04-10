import { PrismaClient } from "@prisma/client";

/**
 * Create prisma client
 * 
 * @returns 
 */
function createPrismaClient() {
    console.log(`Node env: `, process.env.NODE_ENV);
    if(process.env.NODE_ENV === "production") {
        const prisma = new PrismaClient();
        
        return prisma;
    } else {
        console.log(`Creating development prisma client`);
        if(!global.prisma) {
            global.prisma = new PrismaClient();
        }
        
        return global.prisma;
    }
}

// Create and export
const prisma = createPrismaClient();

export default prisma;
