import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateLaboratoryService } from './create-laboratory/create-laboratory.service';
import { Laboratory } from '../entitys/laboratory.entity';
import { DeleteExamService } from './delete-exam/delete-exam.service';
import RequestCreateLatoratoryDTO from './dtos/request-create-laboratory.dto';
import { RequestUpdateExamDTO } from './dtos/request-update-exam.dto';
import { UpdateExamService } from './update-exam/update-exam.service';
import { FindAllExamService } from './find-all-exam/find-all-exam.service';
import { Exam } from 'src/entitys/exam.entity.entity';

@Controller('laboratory')
@UseGuards()
export class LaboratoryController {
  constructor(
    private readonly createLaboratoryService: CreateLaboratoryService,
    private readonly deleteExamService: DeleteExamService,
    private readonly findAllExamService: FindAllExamService,
    private readonly updateExamService: UpdateExamService,
  ) {}

  @Post()
  create(@Body() createLaboratoryDTO: RequestCreateLatoratoryDTO): Promise<RequestCreateLatoratoryDTO> {
    return this.createLaboratoryService.execute(createLaboratoryDTO);
  }

  @Get()
  findAll(): Promise<Exam[]> {
    return this.findAllExamService.execute();
  }


  @Delete('/:id')
  delete(@Param('id') id: string): Promise<void> {
    return this.deleteExamService.execute(id);
  }

  @Put()
  update(@Body() updateExamDTO: RequestUpdateExamDTO): Promise<void> {
    return this.updateExamService.execute(updateExamDTO);
  }

}
