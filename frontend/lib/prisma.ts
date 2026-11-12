
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/app/generated/prisma/client";

const connectionString = process.env.DATABASE_URL!;//reads db url from .env

const adapter = new PrismaPg({//adapter connects prism to postgresql
  connectionString,
});

const globalForPrisma = globalThis as unknown as {//GFP reuses prism instance
  prisma: PrismaClient | undefined;
};

const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({ adapter });//creates prism client

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;//Makes client reusable in other files
