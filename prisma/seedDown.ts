import { PrismaClient } from '@prisma/client';
import logger from '../src/config/logger';

const prisma = new PrismaClient();

export async function seedDown() {
  logger.info('Seeding Down database...');
  await prisma.user.deleteMany({
    where: {
      email: {
        in: [
          'sekuru@gmail.com',
          'wilson@gmail.com',
          
        ]
      }
    }
  });
  logger.info('Seeding Down completed!');
}
