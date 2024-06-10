import { PrismaClient } from "@prisma/client";


// we are caching the prisma db client , because if we initialize the client once
// there is no need to do it again. no point to create multiple connections to db , if we have one
declare global {
    var cachedPrisma: PrismaClient 
}

let prisma: PrismaClient

if(process.env.NODE_ENV === "production") {
    prisma = new PrismaClient()
}
else {
    if(!global.cachedPrisma) {
        global.cachedPrisma = new PrismaClient()
    } 

    prisma = global.cachedPrisma
}

export const db = prisma;

