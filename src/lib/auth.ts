import { prisma } from "@/lib/prisma";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

export const auth = betterAuth({
  // Secret and base URL for cookie/session encryption
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,

  // Use Prisma with Postgres
  database: prismaAdapter(prisma, { provider: "postgresql" }),

  // Enable email+password flow
  emailAndPassword: {
    enabled: true,
    // We’ll manually seed the admin; users can only sign in
    autoSignIn: true,
    // enforce min length etc if needed
  },
});

export default auth;
