import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './entities/photo.entity';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) {}

  create(createPhotoDto: CreatePhotoDto) {
    const photo = this.photoRepository.create(createPhotoDto);
    return this.photoRepository.save(photo);
  }

  findAll() {
    return this.photoRepository.find();
  }

  findOne(id: number) {
    return this.photoRepository.findOneBy({ id });
  }

  async update(id: number, updatePhotoDto: UpdatePhotoDto) {
    await this.photoRepository.update(id, updatePhotoDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.photoRepository.delete(id);
    return { deleted: true };
  }
}
