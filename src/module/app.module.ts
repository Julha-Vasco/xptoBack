import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entrega } from '../entities/entrega.entity';
import { Filial } from '../entities/filial.entity';
import { EntregaService } from '../service/entrega.service';
import { EntregaController } from '../controller/entrega.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : undefined,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Entrega, Filial]),
  ],
  controllers: [EntregaController],
  providers: [EntregaService],
})
export class AppModule {}
