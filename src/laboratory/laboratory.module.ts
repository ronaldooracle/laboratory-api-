import { Module } from '@nestjs/common';
import { LaboratoryController } from './laboratory..controller';
import { CreateLaboratoryService } from './create-laboratory/create-laboratory.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Laboratory } from 'src/entitys/laboratory.entity';
import { DeleteExamService } from './delete-exam/delete-exam.service';
import { Exam } from 'src/entitys/exam.entity.entity';
import { UpdateExamService } from './update-exam/update-exam.service';
import { FindAllExamService } from './find-all-exam/find-all-exam.service';

@Module({
  imports: [TypeOrmModule.forFeature([Laboratory,Exam])],
  controllers: [LaboratoryController],
  providers: [
    CreateLaboratoryService,
    DeleteExamService,
    UpdateExamService,
    FindAllExamService,
  ],
})
export class LaboratoryModule {}
