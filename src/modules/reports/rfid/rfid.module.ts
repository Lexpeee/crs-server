import { Module } from '@nestjs/common';
import { RfidService } from './rfid.service';
import { RfidResolver } from './rfid.resolver';

@Module({
  providers: [RfidResolver, RfidService],
})
export class RfidModule {}
