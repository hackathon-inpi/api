import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import ProtocolGRU from '../../../../protocolGRU/infra/typeorm/entities/ProtocolGRU';

@Entity()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  senha!: string;

  @Column()
  numeroPatentes!: number;

  @Column()
  numeroMarcas!: number;

  @Column()
  numeroSoftwares!: number;
}
