import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { DamageService } from './damage.service';
import {
  DamageReportResponseMutationData,
  DamageReportsResponseQueryData,
} from './entities';
import { DamageReport } from './entities/query';
import {
  CreateDamageReportInput,
  UpdateDamageReportInput,
} from './entities/mutation';

@Resolver(() => DamageReport)
export class DamageResolver {
  constructor(private readonly damageService: DamageService) {}

  @Query(() => DamageReportsResponseQueryData)
  findAll() {
    return this.damageService.findAll();
  }

  @Query(() => DamageReportsResponseQueryData)
  findOne(_id: string) {
    return this.damageService.findOne(_id);
  }

  @Mutation(() => DamageReportResponseMutationData)
  createDamage(@Args('data') data: CreateDamageReportInput) {
    return this.damageService.create(data);
  }

  @Mutation(() => DamageReportResponseMutationData)
  updateDamage(
    @Args('_id') _id: string,
    @Args('data') data: UpdateDamageReportInput,
  ) {
    return this.damageService.update(_id, data);
  }
}
