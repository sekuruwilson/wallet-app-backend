/*eslint-disable*/

import { PrismaClient } from '@prisma/client';
import logger from '../src/config/logger';
import config from '../src/config/config';
import { encryptPassword } from '../src/utils/encryption';
import { seedDown } from './seedDown';

const prisma = new PrismaClient();

async function main() {
  logger.info('Seeding database...');
  await seedDown();
  await prisma.user.createMany({
    data: [
      {
        email: 'wilson@gmail.com',
        firstname: 'Admin',
        lastname: 'User',
        isInviteAccepted: true,
        password: await encryptPassword(config.seedPassword)
      },
      {
        email: 'sekuru@gmail.cpm',
        firstname: 'Admin',
        lastname: 'Test',
        isInviteAccepted: true,
        password: await encryptPassword('Admin@123')
      }
    ],
  });


  logger.info('Seeding Up completed!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    logger.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
