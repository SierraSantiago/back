// src/contactus/contactus.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactUs } from './entities/contact-us.entity';
import { CreateContactUsDto } from './dto/create-contact-us.dto';

@Injectable()
export class ContactUsService {
  constructor(
    @InjectRepository(ContactUs)
    private contactUsRepository: Repository<ContactUs>,
  ) {}

  // Crear un nuevo contacto
  async create(createContactUsDto: CreateContactUsDto): Promise<ContactUs> {
    const contact = this.contactUsRepository.create(createContactUsDto);
    return this.contactUsRepository.save(contact);
  }

  // Obtener todos los contactos
  async findAll(): Promise<ContactUs[]> {
    return this.contactUsRepository.find();
  }
}
