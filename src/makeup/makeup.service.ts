import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Makeup } from './entities/makeup.entity';

@Injectable()
export class MakeupService {
  constructor(
    @InjectRepository(Makeup)
    private readonly makeupRepository: Repository<Makeup>,
  ) {}

  async findAll(): Promise<Makeup[]> {
    return this.makeupRepository.find();
  }

  async findOne(slug: string): Promise<Makeup> {
    return this.makeupRepository.findOne({ where: { slug } });
  }

  async create(makeup: Makeup): Promise<Makeup> {
    return this.makeupRepository.save(makeup);
  }

  async update(slug: string, makeup: Makeup): Promise<Makeup> {
    await this.makeupRepository.update({ slug }, makeup);
    return this.findOne(slug);
  }

  async remove(slug: string): Promise<void> {
    await this.makeupRepository.delete({ slug });
  }
}
