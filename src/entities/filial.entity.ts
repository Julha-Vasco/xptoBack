import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Entrega } from './entrega.entity';

@Entity({ name: 'filial' })
export class Filial {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  codigo: number;

  @Column()
  nome: string;

  @Column()
  endereco: string;

  @Column()
  responsavel: string;

  @OneToMany(() => Entrega, (entrega) => entrega.filialDestino)
  entregas: Entrega[];
}
