import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const adapter = new PrismaPg({
  connectionString: process.env['DATABASE_URL']!,
});

const prisma = new PrismaClient({ adapter });

// ─── Seed Data ──────────────────────────────────────────────────────────────

const DEFAULT_CATEGORIES = [
  'Academic',
  'Organization',
  'Crochet Business',
  'Personal',
];

const DEMO_USERS = [
  {
    email: 'student@doitcha.dev',
    password: 'password123',
    name: 'Demo Student',
  },
  {
    email: 'crochet@doitcha.dev',
    password: 'password123',
    name: 'Demo Crochet Maker',
  },
];

const SALT_ROUNDS = 12;

// ─── Main Seed Function ────────────────────────────────────────────────────

async function main() {
  console.log('\n🌱 Starting seed...');

  for (const userData of DEMO_USERS) {
    // Upsert user — skip if already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: userData.email },
    });

    if (existingUser) {
      console.log(`⏭️  Skipping existing user: ${userData.email}`);
      continue;
    }

    const hashedPassword = await bcrypt.hash(userData.password, SALT_ROUNDS);

    const user = await prisma.user.create({
      data: {
        email: userData.email,
        password: hashedPassword,
        categories: {
          create: DEFAULT_CATEGORIES.map((name) => ({ name })),
        },
      },
    });

    console.log(`✅ Created user: ${user.email}`);

    // Seed sample tasks for the student user
    if (userData.email === 'student@doitcha.dev') {
      const categories = await prisma.category.findMany({
        where: { userId: user.id },
      });

      const academicCat = categories.find((c) => c.name === 'Academic');
      const orgCat = categories.find((c) => c.name === 'Organization');
      const personalCat = categories.find((c) => c.name === 'Personal');

      await prisma.task.createMany({
        data: [
          {
            title: 'Submit Final Project Report',
            description: 'Complete and submit the final project report for Software Engineering course.',
            priority: 'URGENT',
            status: 'PENDING',
            deadline: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
            categoryId: academicCat?.id,
            userId: user.id,
          },
          {
            title: 'Prepare Midterm Presentation',
            description: 'Prepare slides and demo for the midterm presentation.',
            priority: 'HIGH',
            status: 'PENDING',
            deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
            categoryId: academicCat?.id,
            userId: user.id,
          },
          {
            title: 'Attend Weekly Organization Meeting',
            description: 'Attend the weekly student organization meeting and take notes.',
            priority: 'MEDIUM',
            status: 'COMPLETED',
            categoryId: orgCat?.id,
            userId: user.id,
          },
          {
            title: 'Buy Groceries',
            description: 'Buy groceries for the week.',
            priority: 'LOW',
            status: 'PENDING',
            categoryId: personalCat?.id,
            userId: user.id,
          },
        ],
      });

      console.log(`   └─ Seeded 4 sample tasks for ${user.email}`);
    }

    // Seed sample estimate + task for the crochet user
    if (userData.email === 'crochet@doitcha.dev') {
      const categories = await prisma.category.findMany({
        where: { userId: user.id },
      });

      const crochetCat = categories.find((c) => c.name === 'Crochet Business');

      const estimate = await prisma.priceEstimateHistory.create({
        data: {
          productName: 'Panda Bear',
          sizeCm: 20,
          complexity: 'MEDIUM',
          estimatedHours: 12,
          estimatedMaterialCost: 60000,
          minimumRecommendedPrice: 207000,
          maximumRecommendedPrice: 276000,
          userId: user.id,
        },
      });

      await prisma.task.create({
        data: {
          title: 'Produce Amigurumi Panda Bear',
          description:
            'Recommended Price:\nRp207.000 - Rp276.000\n\nEstimated Working Hours:\n12 Hours',
          priority: 'HIGH',
          status: 'PENDING',
          deadline: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days from now
          categoryId: crochetCat?.id,
          estimateHistoryId: estimate.id,
          userId: user.id,
        },
      });

      console.log(`   └─ Seeded 1 estimate + 1 linked task for ${user.email}`);
    }
  }

  console.log('\n✨ Seed completed successfully!\n');
}

main()
  .catch((e) => {
    console.error('\n❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
