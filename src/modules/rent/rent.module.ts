import { Module } from '@nestjs/common';
import { RentService } from './rent.service';
import { RentResolver } from './rent.resolver';

@Module({
  providers: [RentResolver, RentService],
})
export class RentModule {}
