import {
  Injectable,
  Logger,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Laboratory } from '../../entitys/laboratory.entity';
import { Repository } from 'typeorm';
import RequestCreateLatoratoryDTO from '../dtos/request-create-laboratory.dto';

const log = new Logger('CreateLaboratoryService');

@Injectable()
export class CreateLaboratoryService {
  constructor(
    @InjectRepository(Laboratory)
    private readonly laboratoryRepository: Repository<Laboratory>,

  ) { }
  async execute({
    laboratory,
    active,
    address,

  }: RequestCreateLatoratoryDTO): Promise<RequestCreateLatoratoryDTO> {

    try {
      const laboratoryCreated = this.laboratoryRepository.create();
      laboratoryCreated.laboratory = laboratory;
      laboratoryCreated.active = active;
      laboratoryCreated.address = address;


      const createdEntity = await this.laboratoryRepository.save(laboratoryCreated);

      return createdEntity;


    } catch (error) {
      log.error(`Erro ao salvar a laboratorio na base de dados`);
      throw new InternalServerErrorException(
        'Erro ao salvar a laboratorio na base de dados',
      );
    }
  }
}
