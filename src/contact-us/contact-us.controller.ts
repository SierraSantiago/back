// src/contactus/contactus.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { ContactUsService } from './contact-us.service';
import { CreateContactUsDto } from './dto/create-contact-us.dto';
import { ContactUs } from './entities/contact-us.entity';

@Controller('contactus')
export class ContactUsController {
  constructor(private readonly contactUsService: ContactUsService) {}

  // Ruta para obtener todos los contactos
  @Get()
  findAll(): Promise<ContactUs[]> {
    return this.contactUsService.findAll();
  }

  // Ruta para crear un nuevo contacto
  @Post()
  create(@Body() createContactUsDto: CreateContactUsDto): Promise<ContactUs> {
    return this.contactUsService.create(createContactUsDto);
  }
}
