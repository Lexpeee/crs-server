import { Test, TestingModule } from '@nestjs/testing';
import { RepairResolver } from './repair.resolver';
import { RepairService } from './repair.service';

describe('RepairResolver', () => {
  let resolver: RepairResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RepairResolver, RepairService],
    }).compile();

    resolver = module.get<RepairResolver>(RepairResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
