import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { neonConfig } from "@neondatabase/serverless";
import ws from "ws";

// Required for Node.js environment
neonConfig.webSocketConstructor = ws;

const connectionString = "postgresql://neondb_owner:npg_W0JwImRf3pNX@ep-crimson-surf-a1pbsnmo-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require";

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
}

function createPrismaClient() {
    // PrismaNeon expects PoolConfig, not a Pool instance
    const adapter = new PrismaNeon({ connectionString });
    return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if(process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;