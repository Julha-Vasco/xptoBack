import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Filial } from './filial.entity';

@Entity()
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
  prazoEntrega: Date;

  @Column()
  descricaoMercadoria: string;

  @Column({ type: 'enum', enum: ['PENDING', 'DELIVERED'], default: 'PENDING' })
  status: string;

  @ManyToOne(() => Filial, (filial) => filial.entregas, { eager: true })
  @JoinColumn({ name: 'filialDestino' })
  filialDestino: Filial;
}
