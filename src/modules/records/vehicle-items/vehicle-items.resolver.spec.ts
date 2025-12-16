import { Test, TestingModule } from '@nestjs/testing';
import { VehicleItemsResolver } from './vehicle-items.resolver';
import { VehicleItemsService } from './vehicle-items.service';

describe('VehicleItemsResolver', () => {
  let resolver: VehicleItemsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehicleItemsResolver, VehicleItemsService],
    }).compile();

    resolver = module.get<VehicleItemsResolver>(VehicleItemsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
