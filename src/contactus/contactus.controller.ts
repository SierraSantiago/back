// src/contactus/contactus.controller.ts

import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ContactusService } from './contactus.service';
import { CreateContactusDto } from './dto/create-contactus.dto';
import { Contactus } from './entities/contactus.entity';

@Controller('contactus')
export class ContactusController {
  constructor(private readonly contactusService: ContactusService) {}

  @Post()
  async create(@Body() createContactusDto: CreateContactusDto): Promise<Contactus> {
    return this.contactusService.create(createContactusDto);
  }

  @Get()
  async findAll(): Promise<Contactus[]> {
    return this.contactusService.findAll();
  }


  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.contactusService.remove(id);
  }
}
