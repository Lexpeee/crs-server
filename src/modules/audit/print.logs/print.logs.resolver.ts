import { Query, Args, Mutation, Resolver } from '@nestjs/graphql';
import {
  PrintAuditLogResponseMutationData,
  PrintAuditLogResponseQueryData,
  PrintAuditLogsResponseQueryData,
} from './entities';
import {
  CreatePrintAuditLogInput,
  UpdatePrintAuditLogInput,
} from './entities/mutation';
import { PrintAuditLog } from './entities/query';
import { PrintLogsService } from './print.logs.service';

@Resolver(() => PrintAuditLog)
export class PrintLogsResolver {
  constructor(private readonly printLogsService: PrintLogsService) {}

  @Query(() => PrintAuditLogsResponseQueryData, { name: 'printAuditLogs' })
  async findAll() {
    return await this.printLogsService.findAll();
  }

  @Query(() => PrintAuditLogResponseQueryData, { name: 'printAuditLog' })
  async findOne(@Args('_id') _id: string) {
    return await this.printLogsService.findOne(_id);
  }

  @Mutation(() => PrintAuditLogResponseMutationData)
  create(@Args('data') data: CreatePrintAuditLogInput) {
    return this.printLogsService.create(data);
  }

  @Mutation(() => PrintAuditLogResponseMutationData)
  update(
    @Args('_id') _id: string,
    @Args('data') data: UpdatePrintAuditLogInput,
  ) {
    return this.printLogsService.update(_id, data);
  }
}
