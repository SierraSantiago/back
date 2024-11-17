import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ModelsModule } from './models/models.module';
import { Model } from './models/entities/model.entity';
import { PhotosModule } from './photos/photos.module';
import { Photo } from './photos/entities/photo.entity';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    
    
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT, 
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Model, Photo], // Asegúrate de incluir todas las entidades aquí
      synchronize: false, 
    }),

    // Importar el módulo que maneja los modelos
    ModelsModule,
    PhotosModule,
  ],
})
export class AppModule {}
