import { Test, TestingModule } from '@nestjs/testing';
import { FuelResolver } from './fuel.resolver';
import { FuelService } from './fuel.service';

describe('FuelResolver', () => {
  let resolver: FuelResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FuelResolver, FuelService],
    }).compile();

    resolver = module.get<FuelResolver>(FuelResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
