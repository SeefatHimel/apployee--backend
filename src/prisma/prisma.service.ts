import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    try {
      await this.$connect();
      console.log('Database Connected');
    } catch (error) {
      console.log('🚀 ~ PrismaService ~ onModuleInit ~ error:', error);
      console.log('Database Connection Failed');
    }
  }
}
