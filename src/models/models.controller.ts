import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ModelsService } from './models.service';
import { CreateModelDto } from './dto/create-model.dto'; ;
import { Model } from './entities/model.entity';

@Controller('models')
export class ModelsController {
  constructor(private readonly modelsService: ModelsService) {}

  // Obtener todos los modelos
  @Get()
  async findAll(@Query('skip') skip: number = 0, @Query('take') take: number = 10): Promise<Model[]> {
    return this.modelsService.findAll(skip, take);
  }

  // Obtener un modelo por su slug
  @Get(':slug')
  async findOneBySlug(@Param('slug') slug: string): Promise<Model> {
    return this.modelsService.findOneBySlug(slug);
  }

  // Crear un nuevo modelo
  @Post()
  async create(@Body() createModelDto: CreateModelDto): Promise<Model> {
    return this.modelsService.create(createModelDto);
  }
}
