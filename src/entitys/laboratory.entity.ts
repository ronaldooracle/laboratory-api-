import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'LABORATORIO' })
export class Laboratory {
  @PrimaryGeneratedColumn('uuid', { name: 'ID' })
  id: string;

  @Column({ name: 'EMPRESA' })
  laboratory: string;

  active:boolean

  address:string


}


