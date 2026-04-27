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
  const drivers = [
    { name: 'Joban', code: 'JOBAN' },
    { name: 'Robin', code: 'ROBIN' },
    { name: 'Yuvi', code: 'YUVI' },
    { name: 'Dilawar', code: 'DILAWAR' },
    { name: 'Harsh', code: 'HARSH' },
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

