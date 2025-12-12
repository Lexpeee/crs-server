import { Test, TestingModule } from '@nestjs/testing';
import { RentResolver } from './rent.resolver';
import { RentService } from './rent.service';

describe('RentResolver', () => {
  let resolver: RentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RentResolver, RentService],
    }).compile();

    resolver = module.get<RentResolver>(RentResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
