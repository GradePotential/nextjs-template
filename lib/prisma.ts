import { PrismaClient } from '@prisma/client';

// https://pris.ly/d/help/next-js-best-practices

let prisma: PrismaClient;

const GLOBAL = global as typeof globalThis & { prisma?: PrismaClient };

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
    if (!GLOBAL.prisma) {
        GLOBAL.prisma = new PrismaClient();
    }
    prisma = GLOBAL.prisma;
}
export default prisma;
