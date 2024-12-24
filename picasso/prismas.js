import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis;

export const prismas = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prismas;
}
