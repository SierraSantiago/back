import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('photos') // Asegúrate de que coincide con el nombre exacto de la tabla
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  title: string;

  @Column({ name: 'imageurl', type: 'text', nullable: false })
  imageUrl: string;

  @Column({ type: 'numeric', precision: 10, scale: 2, nullable: false })
  price: number;
}
