import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MakeupService } from './makeup.service';
import { MakeupController } from './makeup.controller';
import { Makeup } from './entities/makeup.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Makeup])], 
  providers: [MakeupService], 
  controllers: [MakeupController],
})
export class MakeupModule {}
