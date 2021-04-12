import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinColumn, OneToOne, ManyToOne } from 'typeorm';
import ProtocolGRU from '../../../../protocolGRU/infra/typeorm/entities/ProtocolGRU';
import User from '../../../../user/infra/typeorm/entities/User';

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

  @OneToOne(type => ProtocolGRU)
  @JoinColumn({ name: "idGRU" })
  protocolGRU!: ProtocolGRU;

  @ManyToOne(type => User)
  @JoinColumn({ name: "idUser" })
  user!: User;
}
