import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Filial } from '../entities/filial.entity';
import { CreateFilialDto } from '../dto/filial/create-filial.dto';

@Injectable()
export class FilialService {
  constructor(
    @InjectRepository(Filial)
    private readonly filialRepository: Repository<Filial>,
  ) {}

  async create(createFilialDto: CreateFilialDto): Promise<Filial> {
    const filial = this.filialRepository.create(createFilialDto);
    return await this.filialRepository.save(filial);
  }

  async findAll(): Promise<Filial[]> {
    return this.filialRepository.find();
  }
}
