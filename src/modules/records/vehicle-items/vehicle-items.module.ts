import { Module } from '@nestjs/common';
import { VehicleItemsService } from './vehicle-items.service';
import { VehicleItemsResolver } from './vehicle-items.resolver';

@Module({
  providers: [VehicleItemsResolver, VehicleItemsService],
})
export class VehicleItemsModule {}
