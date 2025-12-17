import { Module } from '@nestjs/common';
import { DamageService } from './damage.service';
import { DamageResolver } from './damage.resolver';

@Module({
  providers: [DamageResolver, DamageService],
})
export class DamageModule {}
