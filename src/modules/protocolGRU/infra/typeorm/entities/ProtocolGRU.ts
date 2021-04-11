import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinColumn, ManyToOne } from 'typeorm';
import User from '../../../../user/infra/typeorm/entities/User';

@Entity()
export default class ProtocolGRU extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  status!: string;

  @Column()
  date!: Date;

  @Column()
  price!: number;

  @Column()
  barCode!: string;

  @ManyToOne(type => User)
  @JoinColumn({ name: "user_id"})
  user!: User 
}
