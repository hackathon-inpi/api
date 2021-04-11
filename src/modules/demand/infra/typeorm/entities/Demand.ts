import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinColumn, OneToOne } from 'typeorm';
import ProtocolGRU from '../../../../protocolGRU/infra/typeorm/entities/ProtocolGRU';

@Entity()
export default class Demand extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  type!: string;

  @Column()
  status!: string;

  @Column({ array: true })
  historical!: string;

  @OneToOne(type => ProtocolGRU)
  @JoinColumn({ name: "idGRU" })
  protocolGRU!: ProtocolGRU;
}
