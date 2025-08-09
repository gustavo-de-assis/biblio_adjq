import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { AddressesModule } from './addresses/addresses.module';
import { AuthorsModule } from './authors/authors.module';
import { LoansModule } from './loans/loans.module';

@Module({
  imports: [PrismaModule, BooksModule, UsersModule, AddressesModule, AuthorsModule, LoansModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
