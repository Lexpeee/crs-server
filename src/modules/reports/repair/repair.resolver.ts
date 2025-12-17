import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  RepairReportResponseMutationData,
  RepairReportResponseQueryData,
  RepairReportsResponseQueryData,
} from './entities';
import {
  CreateRepairReportInput,
  UpdateRepairReportInput,
} from './entities/mutation';
import { RepairReport } from './entities/query';
import { RepairService } from './repair.service';

@Resolver(() => RepairReport)
export class RepairResolver {
  constructor(private readonly repairService: RepairService) {}

  @Mutation(() => RepairReportResponseMutationData)
  createRepair(@Args('data') data: CreateRepairReportInput) {
    return this.repairService.create(data);
  }

  @Query(() => RepairReportsResponseQueryData)
  findAll() {
    return this.repairService.findAll();
  }

  @Query(() => RepairReportResponseQueryData)
  findOne(@Args('_id') _id: string) {
    return this.repairService.findOne(_id);
  }

  @Mutation(() => RepairReportResponseMutationData)
  updateRepair(
    @Args('_id') _id: string,
    @Args('data') data: UpdateRepairReportInput,
  ) {
    return this.repairService.update(_id, data);
  }
}
