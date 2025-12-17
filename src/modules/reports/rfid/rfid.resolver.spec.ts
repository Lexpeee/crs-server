import { Test, TestingModule } from '@nestjs/testing';
import { RfidResolver } from './rfid.resolver';
import { RfidService } from './rfid.service';

describe('RfidResolver', () => {
  let resolver: RfidResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RfidResolver, RfidService],
    }).compile();

    resolver = module.get<RfidResolver>(RfidResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
