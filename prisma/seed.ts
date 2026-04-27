import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const prisma = new PrismaClient({
  adapter: new PrismaPg(
    new Pool({
      connectionString: process.env.DATABASE_URL,
    })
  ),
});

async function main() {
  // Replace these with your real driver names + codes (promo codes).
  // Codes should be short, uppercase, and easy to type.
  const drivers = [
    { name: 'Driver 1', code: 'DRIVER1' },
    { name: 'Driver 2', code: 'DRIVER2' },
    { name: 'Driver 3', code: 'DRIVER3' },
    { name: 'Driver 4', code: 'DRIVER4' },
    { name: 'Driver 5', code: 'DRIVER5' },
  ];

  for (const d of drivers) {
    await prisma.driver.upsert({
      where: { code: d.code },
      update: { name: d.name, active: true },
      create: { name: d.name, code: d.code, active: true },
    });
  }
}

main()
  .then(async () => prisma.$disconnect())
  .catch(async (e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

