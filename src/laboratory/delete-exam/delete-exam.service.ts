import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Exam } from '../../entitys/exam.entity.entity';
import { InjectRepository } from '@nestjs/typeorm';

const log = new Logger('DeleteExamService');
@Injectable()
export class DeleteExamService {
  constructor(
    @InjectRepository(Exam)
    private readonly ExamRepository: Repository<Exam>,
  ) {}

  async execute(id: string): Promise<void> {
    try {
      await this.deleteExam(id);
    } catch (error) {
      log.error('Erro ao deletar a exame na base de dados');
      throw new InternalServerErrorException(
        'Erro ao deletar a exame na base de dados',
      );
    }
  }
  async deleteExam(id: string): Promise<void> {
    await this.ExamRepository
      .createQueryBuilder('Exam')
      .delete()
      .where('id = :id', { id })
      .execute();
  }
}
