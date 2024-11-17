import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('models')
export class Model {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text', { array: true })
  images: string[];

  @Column()
  description: string;

  @Column({ unique: true })
  slug: string;

  @Column({ nullable: true })
  height: string;

  @Column({ nullable: true })
  hair_color: string;

  @Column({ nullable: true })
  eye_color: string;

  @Column({ type: 'int', nullable: true })
  experience: number;

  @Column({ nullable: true })
  country: string;
}
