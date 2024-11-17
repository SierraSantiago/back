import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MakeupService } from './makeup.service';
import { MakeupController } from './makeup.controller';
import { Makeup } from './entities/makeup.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Makeup])], // Importa la entidad Makeup para interactuar con la base de datos
  providers: [MakeupService], // Proveedor de servicios para manejar la lógica de negocios
  controllers: [MakeupController], // Controlador que maneja las rutas y solicitudes HTTP
})
export class MakeupModule {}
