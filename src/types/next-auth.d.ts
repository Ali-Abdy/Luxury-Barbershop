import { type DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: "CUSTOMER" | "BARBER" | "ADMIN";
    } & DefaultSession["user"];
  }

  interface User {
    role: "CUSTOMER" | "BARBER" | "ADMIN";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: "CUSTOMER" | "BARBER" | "ADMIN";
  }
}
