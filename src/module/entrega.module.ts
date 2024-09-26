import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entrega } from '../entities/entrega.entity';
import { EntregaService } from '../service/entrega.service';
import { EntregaController } from '../controller/entrega.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Entrega])],
  providers: [EntregaService],
  controllers: [EntregaController],
})
export class EntregaModule {}
