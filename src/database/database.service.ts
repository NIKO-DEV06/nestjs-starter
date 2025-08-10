import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';

// This service can be used to manage database connections, queries, etc.

@Injectable()
export class DatabaseService extends PrismaClient {
  async onModuleInit() {
    await this.$connect();
  }
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
