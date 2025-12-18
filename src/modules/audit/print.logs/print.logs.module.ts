import { Module } from '@nestjs/common';
import { PrintLogsService } from './print.logs.service';
import { PrintLogsResolver } from './print.logs.resolver';

@Module({
  providers: [PrintLogsResolver, PrintLogsService],
})
export class PrintLogsModule {}
