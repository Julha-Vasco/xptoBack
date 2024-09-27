import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { Entrega } from '../entities/entrega.entity';
import { Filial } from '../entities/filial.entity';
import { EntregaService } from '../service/entrega.service';
import { EntregaController } from '../controller/entrega.controller';
import { FilialController } from 'src/controller/filial.controller';
import { FilialService } from 'src/service/filial.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : undefined,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [join(__dirname + '/../**/*.entity.{js,ts}')],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Entrega, Filial]),
  ],
  controllers: [EntregaController, FilialController],
  providers: [EntregaService, FilialService],
})
export class AppModule {}
