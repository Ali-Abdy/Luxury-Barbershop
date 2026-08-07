import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

export const getCustomerAppointments = async () => {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");

  return await prisma.appointment.findMany({
    where: { customerId: session.user.id },
    include: { service: true, barber: { include: { user: true } } },
    orderBy: { startTime: "asc" },
  });
};

export const cancelAppointment = async (appointmentId: string) => {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");

  return await prisma.appointment.updateMany({
    where: { id: appointmentId, customerId: session.user.id },
    data: { status: "CANCELLED" },
  });
};
