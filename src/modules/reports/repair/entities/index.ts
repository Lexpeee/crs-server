import { Field, ObjectType } from '@nestjs/graphql';
import { RepairReport } from './query';
import {
  MutationResponseData,
  QueryResponseData,
} from 'src/gql/common/entities';

@ObjectType()
export class RepairReportsResponseQueryData extends QueryResponseData {
  @Field(() => [RepairReport])
  data: RepairReport[];
}

@ObjectType()
export class RepairReportResponseQueryData extends QueryResponseData {
  @Field(() => RepairReport)
  data: RepairReport;
}

@ObjectType()
export class RepairReportResponseMutationData extends MutationResponseData {
  @Field(() => RepairReport)
  data: RepairReport;
}
