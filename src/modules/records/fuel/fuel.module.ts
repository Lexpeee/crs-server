import { Module } from '@nestjs/common';
import { FuelService } from './fuel.service';
import { FuelResolver } from './fuel.resolver';

@Module({
  providers: [FuelResolver, FuelService],
})
export class FuelModule {}
