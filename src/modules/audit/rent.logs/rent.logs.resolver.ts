import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RentLogsService } from './rent.logs.service';
import { CreateRentAuditLogInput } from './entities/mutation';
import {
  RentAuditLogResponseMutationData,
  RentAuditLogResponseQueryData,
  RentAuditLogsResponseQueryData,
} from './entities';

@Resolver()
export class RentLogsResolver {
  constructor(private readonly rentLogsService: RentLogsService) {}

  @Query(() => RentAuditLogsResponseQueryData)
  findAll(
    @Args('filters', { type: () => [String], nullable: true })
    filters: Record<string, string>[] | undefined,
  ) {
    return this.rentLogsService.findAll(filters);
  }

  @Query(() => RentAuditLogResponseQueryData)
  findOne(_id: string) {
    return this.rentLogsService.findOne(_id);
  }

  @Mutation(() => RentAuditLogResponseMutationData)
  create(@Args('data') data: CreateRentAuditLogInput) {
    return this.rentLogsService.create(data);
  }
}
