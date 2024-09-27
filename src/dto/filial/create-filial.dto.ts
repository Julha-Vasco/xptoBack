import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateFilialDto {
  @IsInt()
  @IsNotEmpty()
  codigo: number;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  endereco: string;

  @IsNotEmpty()
  @IsString()
  responsavel: string;
}
