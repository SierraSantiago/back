import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('makeup') // Nombre de la tabla en la base de datos
export class Makeup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ name: 'price', type: 'decimal', precision: 10, scale: 2, nullable: false })
  price: number;

  @Column({ name: 'description', type: 'text', nullable: true })
  description: string;

  @Column({ name: 'image_url', type: 'text', nullable: true }) // Asegúrate de usar 'image_url' en minúsculas
  imageUrl: string;

  @Column({ name: 'slug', type: 'varchar', length: 255, unique: true, nullable: false })
  slug: string;
}
