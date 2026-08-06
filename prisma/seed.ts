import { config } from "dotenv";
config();

import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Seeding database...');

  // 1. Specialties
  const specialtyNames = ['Fades', 'Classic Cuts', 'Beard Styling', 'Razor Work'];
  for (const name of specialtyNames) {
    await prisma.specialty.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }
  const specialties = await prisma.specialty.findMany();

  // 2. Services
  const services = [
    { name: 'Classic Haircut', price: 35, duration: 45 },
    { name: 'Premium Beard Trim', price: 25, duration: 30 },
    { name: 'Haircut + Beard Experience', price: 55, duration: 75 },
    { name: 'Luxury Shave Ritual', price: 40, duration: 45 },
  ];
  for (const service of services) {
    await prisma.service.upsert({
      where: { id: 'service-' + service.name.toLowerCase().replace(/\s+/g, '-') },
      update: { price: service.price, duration: service.duration },
      create: {
        id: 'service-' + service.name.toLowerCase().replace(/\s+/g, '-'),
        ...service
      },
    });
  }

  // 3. Barbers (with Profiles & Availability)
  const barbers = [
    { name: 'Julian Rossi', email: 'julian@barbershop.com', bio: 'Master of classic techniques.' },
    { name: 'Adrian Thorne', email: 'adrian@barbershop.com', bio: 'Precision fade specialist.' },
    { name: 'Marcus Vane', email: 'marcus@barbershop.com', bio: 'Artisan with the straight razor.' },
  ];

  for (const barberData of barbers) {
    const user = await prisma.user.upsert({
      where: { email: barberData.email },
    update: {},
    create: {
        name: barberData.name,
        email: barberData.email,
        role: 'BARBER',
        barberProfile: {
          create: {
            bio: barberData.bio,
            specialties: {
              connect: specialties.slice(0, 2).map((s) => ({ id: s.id })),
            },
          },
        },
      },
      include: { barberProfile: true },
    });

    if (user.barberProfile) {
      // Create Availability (Mon-Fri, 9-17)
      for (let day = 1; day <= 5; day++) {
        await prisma.availability.create({
          data: {
            barberId: user.barberProfile.id,
            dayOfWeek: day,
            startTime: '09:00',
            endTime: '17:00',
          },
        });
      }
    }
  }

  // 4. Booking Settings
  await prisma.bookingSettings.upsert({
    where: { id: 'default' },
    update: {},
    create: {
      id: 'default',
      minAdvanceTime: 60,
      maxAdvanceTime: 30,
      slotInterval: 30,
    },
  });

  console.log('Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

