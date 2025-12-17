import { Module } from '@nestjs/common';
import { RepairService } from './repair.service';
import { RepairResolver } from './repair.resolver';

@Module({
  providers: [RepairResolver, RepairService],
})
export class RepairModule {}
