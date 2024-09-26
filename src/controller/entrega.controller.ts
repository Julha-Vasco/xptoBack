import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { EntregaService } from '../service/entrega.service';
import { CreateEntregaDto } from '../dto/entrega/create-entrega.dto';
import { UpdateEntregaDto } from '../dto/entrega/update-entrega.dto';
import { Entrega } from '../entities/entrega.entity';

@Controller('entregas')
export class EntregaController {
  constructor(private readonly entregaService: EntregaService) {}

  @Get()
  findAll(): Promise<Entrega[]> {
    return this.entregaService.findAll();
  }

  @Post()
  create(@Body() createEntregaDto: CreateEntregaDto): Promise<Entrega> {
    return this.entregaService.create(createEntregaDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateEntregaDto: UpdateEntregaDto,
  ): Promise<Entrega> {
    return this.entregaService.update(id, updateEntregaDto);
  }
}
