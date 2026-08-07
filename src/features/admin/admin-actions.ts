"use server";
import "server-only";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

async function checkAdmin() {
  const session = await auth();
  if (session?.user?.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }
}

export async function getAdminDashboardStats() {
  await checkAdmin();

  const [totalAppointments, activeBarbers, totalServices] = await Promise.all([
    prisma.appointment.count(),
    prisma.barberProfile.count({ where: { isActive: true } }),
    prisma.service.count({ where: { isActive: true } }),
  ]);

  return { totalAppointments, activeBarbers, totalServices };
}

export async function getAllBarbers() {
  await checkAdmin();
  return await prisma.barberProfile.findMany({
    include: { user: { select: { name: true, email: true } } },
  });
}

export async function toggleBarberStatus(id: string, isActive: boolean) {
  await checkAdmin();
  return await prisma.barberProfile.update({
    where: { id },
    data: { isActive },
  });
}

export async function getServices() {
  await checkAdmin();
  return await prisma.service.findMany({ orderBy: { name: "asc" } });
}

export const serviceSchema = z.object({
  name: z.string().min(1),
  price: z.coerce.number().positive(),
  duration: z.coerce.number().positive(),
});

export async function createService(data: z.infer<typeof serviceSchema>) {
  await checkAdmin();
  const validated = serviceSchema.parse(data);
  return await prisma.service.create({ data: validated });
}

