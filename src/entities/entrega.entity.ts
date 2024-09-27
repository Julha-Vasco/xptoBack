import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Filial } from './filial.entity';

@Entity({ name: 'entrega' })
export class Entrega {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cep: string;

  @Column()
  rua: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column({ type: 'date' })
  prazo: Date;

  @Column()
  descricaoMercadoria: string;

  @Column({ type: 'enum', enum: ['PENDING', 'DELIVERED'], default: 'PENDING' })
  status: string;

  @ManyToOne(() => Filial, (filial) => filial.entregas, { eager: true })
  @JoinColumn({ name: 'filialDestino' })
  filialDestino: Filial;
}
