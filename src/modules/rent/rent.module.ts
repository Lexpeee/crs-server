import { Module } from '@nestjs/common';
import { RentService } from './rent.service';
import { RentResolver } from './rent.resolver';
import { RentLogsService } from '../logs/rent.logs/rent.logs.service';

@Module({
  providers: [RentResolver, RentService, RentLogsService],
})
export class RentModule {}
