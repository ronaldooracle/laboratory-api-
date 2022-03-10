import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Exam } from '../../entitys/exam.entity.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as slug from 'slug';
import { RequestUpdateExamDTO } from '../dtos/request-update-exam.dto';

const log = new Logger('UpdateExamService');

@Injectable()
export class UpdateExamService {
  constructor(
    @InjectRepository(Exam)
    private readonly examRepository: Repository<Exam>,
  ) {}

  async execute({id,type,active,examNane}: RequestUpdateExamDTO): Promise<void> {
    const exam= await this.examRepository.findOne(id);

    if (!exam) {
      throw new BadRequestException('Categoria não encontrada.');
    }

    exam.id = id;
    exam.type = type;
    exam.active = active;
    exam.examNane = examNane;

    try {
      await this.examRepository.save(exam);
    } catch (error) {
      log.error('Erro ao salvar alteração da exame na base de dados');
      throw new InternalServerErrorException(
        'Erro ao salvar alteração da exame na base de dados',
      );
    }
  }
}
