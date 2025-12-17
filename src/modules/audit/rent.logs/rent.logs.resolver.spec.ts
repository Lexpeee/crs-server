import { Test, TestingModule } from '@nestjs/testing';
import { RentLogsResolver } from './rent.logs.resolver';
import { RentLogsService } from './rent.logs.service';

describe('RentLogsResolver', () => {
  let resolver: RentLogsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RentLogsResolver, RentLogsService],
    }).compile();

    resolver = module.get<RentLogsResolver>(RentLogsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
