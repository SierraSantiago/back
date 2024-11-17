import { Controller, Get, Post, Body } from '@nestjs/common';
import { MembershipsService } from './memberships.service';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { Membership } from './entities/membership.entity';

@Controller('memberships')
export class MembershipsController {
  constructor(private readonly membershipsService: MembershipsService) {}

  @Post()
  async create(@Body() createMembershipDto: CreateMembershipDto): Promise<Membership> {
    return this.membershipsService.create(createMembershipDto);
  }

  @Get()
  async findAll(): Promise<Membership[]> {
    return this.membershipsService.findAll();
  }
}
