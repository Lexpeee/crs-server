import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  RFIDReportResponseMutationData,
  RFIDReportResponseQueryData,
  RFIDReportsResponseQueryData,
} from './entities';
import {
  CreateRFIDReportInput,
  UpdateRFIDReportInput,
} from './entities/mutation';
import { RFIDReport } from './entities/query';
import { RfidService } from './rfid.service';

@Resolver(() => RFIDReport)
export class RfidResolver {
  constructor(private readonly rfidService: RfidService) {}

  @Mutation(() => RFIDReportResponseMutationData)
  createRfid(@Args('data') data: CreateRFIDReportInput) {
    return this.rfidService.create(data);
  }

  @Query(() => RFIDReportResponseQueryData)
  findAll() {
    return this.rfidService.findAll();
  }

  @Query(() => RFIDReportsResponseQueryData)
  findOne(@Args('_id') _id: string) {
    return this.rfidService.findOne(_id);
  }

  @Mutation(() => RFIDReportResponseMutationData)
  updateRfid(
    @Args('_id') _id: string,
    @Args('data') data: UpdateRFIDReportInput,
  ) {
    return this.rfidService.update(_id, data);
  }
}
