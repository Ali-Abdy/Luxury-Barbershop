import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import Credentials from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Auth logic will be implemented here
        return null;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user?.role) token.role = user.role as "CUSTOMER" | "BARBER" | "ADMIN";
      return token;
    },
    session({ session, token }) {
      if (session.user) session.user.role = token.role as "CUSTOMER" | "BARBER" | "ADMIN";
      return session;
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnAdmin = nextUrl.pathname.startsWith("/admin");
      if (isOnAdmin) {
        return auth?.user?.role === "ADMIN";
      }
      return true;
    },
  },
  pages: {
    signIn: "/login",
  },
});

