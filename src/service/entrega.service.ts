import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Entrega } from '../entities/entrega.entity';
import { CreateEntregaDto } from '../dto/entrega/create-entrega.dto';
import { UpdateEntregaDto } from '../dto/entrega/update-entrega.dto';
import { Filial } from '../entities/filial.entity';

@Injectable()
export class EntregaService {
  constructor(
    @InjectRepository(Entrega)
    private entregaRepository: Repository<Entrega>,

    @InjectRepository(Filial)
    private filialRepository: Repository<Filial>,
  ) {}

  async findAll(): Promise<any[]> {
    const entregas = await this.entregaRepository.find({
      relations: ['filialDestino'],
    });

    return entregas.map((entrega) => ({
      id: entrega.id,
      descricaoMercadoria: entrega.descricaoMercadoria,
      filialDestino: entrega.filialDestino.codigo,
      prazo: entrega.prazo,
      status: entrega.status,
    }));
  }

  async create(createEntregaDto: CreateEntregaDto): Promise<Entrega> {
    const filial = await this.filialRepository.findOne({
      where: { codigo: createEntregaDto.filialDestino },
    });

    if (!filial) {
      throw new NotFoundException(
        `Filial com código ${createEntregaDto.filialDestino} não encontrada`,
      );
    }

    const novaEntrega = this.entregaRepository.create({
      ...createEntregaDto,
      filialDestino: filial,
    });

    return this.entregaRepository.save(novaEntrega);
  }

  async update(
    id: number,
    updateEntregaDto: UpdateEntregaDto,
  ): Promise<Entrega> {
    const entrega = await this.entregaRepository.findOne({ where: { id } });

    if (!entrega) {
      throw new NotFoundException(`Entrega com ID ${id} não encontrada`);
    }

    Object.assign(entrega, updateEntregaDto);
    return this.entregaRepository.save(entrega);
  }
}
