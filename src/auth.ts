import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcryptjs";
import type { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";

const adminEmail = process.env.ADMIN_EMAIL;
const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "database", maxAge: 60 * 60 * 8 },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const email = credentials?.email as string | undefined;
        const password = credentials?.password as string | undefined;
        if (!email || !password) return null;
        if (!adminEmail || !adminPasswordHash) return null;
        if (email.toLowerCase() !== adminEmail.toLowerCase()) return null;
        const ok = await bcrypt.compare(password, adminPasswordHash);
        if (!ok) return null;
        // ensure admin user exists in DB for database sessions
        let user = await prisma.user.findUnique({
          where: { email: adminEmail },
        });
        if (!user) {
          user = await prisma.user.create({
            data: { email: adminEmail, name: "Admin" },
          });
        }
        return {
          id: user.id,
          name: user.name ?? "Admin",
          email: user.email ?? adminEmail,
        };
      },
    }),
  ],
  pages: { signIn: "/admin/signin" },
  cookies: {
    sessionToken: {
      name: "__Secure-next-auth.session-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
      },
    },
  },
};

export async function getSession() {
  return getServerSession(authOptions);
}

export async function isAdmin() {
  const session = await getSession();
  return (
    !!session?.user?.email &&
    session.user.email.toLowerCase() === (adminEmail ?? "").toLowerCase()
  );
}
