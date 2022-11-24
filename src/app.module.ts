import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MonumentoModule } from './monumento/monumento.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Monumento } from './monumento/entities/monumento.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type :"sqlite",
      database: ":memory:",
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true
    }), MonumentoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
