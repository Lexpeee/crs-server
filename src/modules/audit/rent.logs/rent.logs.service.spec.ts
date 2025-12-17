import { Test, TestingModule } from '@nestjs/testing';
import { RentLogsService } from './rent.logs.service';

describe('RentLogsService', () => {
  let service: RentLogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RentLogsService],
    }).compile();

    service = module.get<RentLogsService>(RentLogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
