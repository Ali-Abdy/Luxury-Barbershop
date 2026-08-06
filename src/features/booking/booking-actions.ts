import { prisma } from "@/lib/prisma";
import { z } from "zod";

export const getAvailableServices = async () => {
  return await prisma.service.findMany({
    where: { isActive: true },
    orderBy: { name: "asc" },
  });
};

export const getAvailableBarbers = async () => {
  return await prisma.barberProfile.findMany({
    where: { isActive: true },
    include: {
      user: { select: { name: true, image: true } },
      specialties: true,
    },
  });
};

export const getAvailableSlots = async (
  barberId: string,
  date: Date
) => {
  const dayOfWeek = date.getDay();
  
  const availability = await prisma.availability.findFirst({
    where: { barberId, dayOfWeek, isActive: true },
  });

  if (!availability) return [];

  const bookedAppointments = await prisma.appointment.findMany({
    where: {
      barberId,
      startTime: {
        gte: new Date(date.setHours(0, 0, 0, 0)),
        lt: new Date(date.setHours(24, 0, 0, 0)),
      },
      status: { not: "CANCELLED" },
    },
  });

  // Logic to generate slots based on availability and bookedAppointments...
  // For now, return a placeholder structure
  return { availability, bookedAppointments };
};

const appointmentSchema = z.object({
  serviceId: z.string(),
  barberId: z.string(),
  startTime: z.date(),
  notes: z.string().optional(),
});

export const createAppointment = async (
  customerId: string,
  data: z.infer<typeof appointmentSchema>
) => {
  const validated = appointmentSchema.parse(data);

  // 1. Verify availability
  // 2. Prevent overlapping
  // 3. Create
  const service = await prisma.service.findUniqueOrThrow({
    where: { id: validated.serviceId },
  });

  const endTime = new Date(validated.startTime.getTime() + service.duration * 60000);

  return await prisma.appointment.create({
    data: {
      ...validated,
      endTime,
      totalPrice: service.price,
      customerId,
      status: "PENDING",
    },
  });
};
