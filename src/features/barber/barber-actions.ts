"use server";
import "server-only";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { AppointmentStatus } from "@prisma/client";

export async function getBarberAppointments() {
  const session = await auth();
  if (!session?.user?.id || (session.user.role !== "BARBER" && session.user.role !== "ADMIN")) {
    throw new Error("Unauthorized");
  }

  let whereClause = {};

  if (session.user.role === "BARBER") {
    const profile = await prisma.barberProfile.findUnique({
      where: { userId: session.user.id },
    });
    if (!profile) throw new Error("Barber profile not found");
    whereClause = { barberId: profile.id };
  }

  return await prisma.appointment.findMany({
    where: whereClause,
    include: {
      service: true,
      customer: { select: { name: true, email: true } },
    },
    orderBy: { startTime: "asc" },
  });
}

export async function updateAppointmentStatus(appointmentId: string, status: AppointmentStatus) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");

  const appointment = await prisma.appointment.findUnique({
    where: { id: appointmentId },
    include: { barber: true },
  });

  if (!appointment) throw new Error("Appointment not found");

  if (session.user.role === "BARBER") {
    if (appointment.barber.userId !== session.user.id) {
      throw new Error("Unauthorized: Cannot modify other barbers' appointments");
    }
  } else if (session.user.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }

  return await prisma.appointment.update({
    where: { id: appointmentId },
    data: { status },
  });
}

export async function getBarberAvailability() {
  const session = await auth();
  if (!session?.user?.id || session.user.role !== "BARBER") {
    throw new Error("Unauthorized");
  }

  const profile = await prisma.barberProfile.findUnique({
    where: { userId: session.user.id },
    include: { availability: true },
  });

  return profile?.availability || [];
}

const availabilitySchema = z.object({
  id: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  isActive: z.boolean(),
});

export async function updateAvailability(data: z.infer<typeof availabilitySchema>) {
  const session = await auth();
  if (!session?.user?.id || session.user.role !== "BARBER") {
    throw new Error("Unauthorized");
  }

  const profile = await prisma.barberProfile.findUnique({
    where: { userId: session.user.id },
  });
  if (!profile) throw new Error("Profile not found");

  const availability = await prisma.availability.findUnique({
    where: { id: data.id },
  });

  if (!availability || availability.barberId !== profile.id) {
    throw new Error("Unauthorized: Cannot modify this availability");
  }

  if (data.startTime >= data.endTime) {
    throw new Error("Start time must be before end time");
  }

  return await prisma.availability.update({
    where: { id: data.id },
    data: {
      startTime: data.startTime,
      endTime: data.endTime,
      isActive: data.isActive,
    },
  });
}
