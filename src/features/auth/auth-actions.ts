"use server";
import "server-only";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { z } from "zod";

const signupSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
});

export async function signUp(data: z.infer<typeof signupSchema>) {
  const { name, email, password } = signupSchema.parse(data);
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      role: "CUSTOMER",
    },
  });
  return { success: true, userId: user.id };
}
