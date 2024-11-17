import { Test, TestingModule } from '@nestjs/testing';
import { MakeupService } from './makeup.service';

describe('MakeupService', () => {
  let service: MakeupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MakeupService],
    }).compile();

    service = module.get<MakeupService>(MakeupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
