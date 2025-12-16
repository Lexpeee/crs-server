import { Module } from '@nestjs/common';
import { RentLogsService } from './rent.logs.service';
import { RentLogsResolver } from './rent.logs.resolver';

@Module({
  providers: [RentLogsResolver, RentLogsService],
})
export class RentLogsModule {}
