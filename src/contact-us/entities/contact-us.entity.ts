
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ContactUs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 100 })
  email: string;

  @Column({ type: 'text' })
  comment: string;
}
