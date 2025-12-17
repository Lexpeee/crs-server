import { Test, TestingModule } from '@nestjs/testing';
import { DamageResolver } from './damage.resolver';
import { DamageService } from './damage.service';

describe('DamageResolver', () => {
  let resolver: DamageResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DamageResolver, DamageService],
    }).compile();

    resolver = module.get<DamageResolver>(DamageResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
