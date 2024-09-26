import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Filial } from '../entities/filial.entity';
import { FilialService } from '../service/filial.service';
import { FilialController } from '../controller/filial.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Filial])],
  controllers: [FilialController],
  providers: [FilialService],
})
export class FilialModule {}
