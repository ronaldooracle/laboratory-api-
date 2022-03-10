import {
    IsBoolean,
    IsDateString,
    IsNotEmpty,
    IsOptional,
    IsString,
    Length,
  } from 'class-validator';

  
  export default class RequestCreateLatoratoryDTO {
    @Length(1, 300, { message: 'Campo name pode ter até 300 caracteres' })
    @IsNotEmpty({ message: 'Campo name é obrigatório' })
    @IsString({ message: 'Campo name precisa ser um texto' })
    laboratory: string;
  
    @IsBoolean()
    @IsOptional()
    active: boolean;

    address: string
  
    
  
  }
  