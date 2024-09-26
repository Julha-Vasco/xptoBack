import { Controller, Post, Body } from '@nestjs/common';
import { FilialService } from '../service/filial.service';
import { CreateFilialDto } from '../dto/filial/create-filial.dto';
import { Filial } from '../entities/filial.entity';

@Controller('filial')
export class FilialController {
  constructor(private readonly filialService: FilialService) {}

  @Post()
  async create(@Body() createFilialDto: CreateFilialDto): Promise<Filial> {
    return this.filialService.create(createFilialDto);
  }
}
