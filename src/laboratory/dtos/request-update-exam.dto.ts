import { IsNotEmpty, IsString } from 'class-validator';
export class RequestUpdateExamDTO {
  @IsNotEmpty({ message: 'Campo id é obrigatório' })
  id: string;

  @IsNotEmpty({ message: 'Campo exame é obrigatório' })
  @IsString({ message: 'Campo exame precisa ser string' })
  examNane: string;

  active: boolean;

  type: [];

}
