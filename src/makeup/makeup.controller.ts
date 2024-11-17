import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { MakeupService } from './makeup.service';
import { Makeup } from './entities/makeup.entity';

@Controller('makeup')
export class MakeupController {
  constructor(private readonly makeupService: MakeupService) {}

  @Get()
  async findAll(): Promise<Makeup[]> {
    return this.makeupService.findAll();
  }

  @Get(':slug')
  async findOne(@Param('slug') slug: string): Promise<Makeup> {
    return this.makeupService.findOne(slug);
  }

  @Post()
  async create(@Body() makeup: Makeup): Promise<Makeup> {
    return this.makeupService.create(makeup);
  }

  @Put(':slug')
  async update(
    @Param('slug') slug: string,
    @Body() makeup: Makeup,
  ): Promise<Makeup> {
    return this.makeupService.update(slug, makeup);
  }

  @Delete(':slug')
  async remove(@Param('slug') slug: string): Promise<void> {
    return this.makeupService.remove(slug);
  }
}
