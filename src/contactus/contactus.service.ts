// src/contactus/contactus.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contactus } from './entities/contactus.entity';
import { CreateContactusDto } from './dto/create-contactus.dto';

@Injectable()
export class ContactusService {
  constructor(
    @InjectRepository(Contactus)
    private contactusRepository: Repository<Contactus>,
  ) {}

  async create(createContactusDto: CreateContactusDto): Promise<Contactus> {
    const contactus = this.contactusRepository.create(createContactusDto);
    return this.contactusRepository.save(contactus);
  }

  async findAll(): Promise<Contactus[]> {
    return this.contactusRepository.find();
  }

  async remove(id: number): Promise<void> {
    await this.contactusRepository.delete(id);
  }
}
