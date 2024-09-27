import {
  IsString,
  IsNotEmpty,
  IsEnum,
  IsDateString,
  IsInt,
} from 'class-validator';

export class CreateEntregaDto {
  @IsString()
  @IsNotEmpty()
  cep: string;

  @IsString()
  @IsNotEmpty()
  rua: string;

  @IsString()
  @IsNotEmpty()
  cidade: string;

  @IsString()
  @IsNotEmpty()
  estado: string;

  @IsDateString()
  prazo: Date;

  @IsString()
  @IsNotEmpty()
  descricaoMercadoria: string;

  @IsEnum(['PENDING', 'DELIVERED'])
  status: string;

  @IsInt()
  @IsNotEmpty()
  filialDestino: number;
}
