import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'EXAMES' })
export class Exam {
  @PrimaryGeneratedColumn('uuid', { name: 'ID' })
  id: string;

  @Column({ name: 'NM_EXAME' })
  examNane: string;

  type: []

  active:boolean


}


