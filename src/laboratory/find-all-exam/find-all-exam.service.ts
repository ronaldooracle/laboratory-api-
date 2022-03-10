import {
  Injectable,
  Logger,
  InternalServerErrorException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Exam } from '../../entitys/exam.entity.entity';
import { InjectRepository } from '@nestjs/typeorm';

const log = new Logger('FindAllExamService');
@Injectable()
export class FindAllExamService {
  constructor(
    @InjectRepository(Exam)
    private readonly ExamRepository: Repository<Exam>,
  ) {}

  async execute(): Promise<Exam[]> {
    try {
      const exames: Exam[] = await this.findAll();
      return exames;
    } catch (error) {
      log.error('Erro ao buscar exames na base de dados');
      throw new InternalServerErrorException(
        'Erro ao buscar exames na base de dados',
      );
    }
  }

  async findAll(): Promise<Exam[]> {
    return await this.ExamRepository
      .createQueryBuilder('exam')
      .getMany()
  }
}
