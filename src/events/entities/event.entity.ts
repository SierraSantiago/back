import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('events')
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  date: string;

  @Column({ type: 'varchar', length: 100 })
  location: string;

  @Column({ type: 'text', array: true })
  models: string[];

  @Column({ type: 'varchar', length: 255 })
  image: string;
}
