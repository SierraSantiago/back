import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Model } from './entities/model.entity';
import { CreateModelDto } from './dto/create-model.dto';

@Injectable()
export class ModelsService {
  constructor(
    @InjectRepository(Model)
    private modelsRepository: Repository<Model>,
  ) {}

  // Obtener todos los modelos con paginación
  async findAll(skip: number = 0, take: number = 10): Promise<Model[]> {
    return this.modelsRepository.find({
      skip,
      take,
    });
  }

  // Obtener un modelo por su slug
  async findOneBySlug(slug: string): Promise<Model> {
    return this.modelsRepository.findOne({ where: { slug } });
  }

  // Crear un nuevo modelo
  async create(createModelDto: CreateModelDto): Promise<Model> {
    const model = this.modelsRepository.create(createModelDto);
    return this.modelsRepository.save(model);
  }
}
