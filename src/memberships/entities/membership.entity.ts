import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('memberships')
export class Membership {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  tier: string;

  @Column({ type: 'varchar', length: 20 })
  price: string;

  @Column({ type: 'text', array: true })
  benefits: string[];
}
