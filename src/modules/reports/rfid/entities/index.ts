import { Field, ObjectType } from '@nestjs/graphql';
import { RFIDReport } from './query';
import {
  MutationResponseData,
  QueryResponseData,
} from 'src/gql/common/entities';

@ObjectType()
export class RFIDReportsResponseQueryData extends QueryResponseData {
  @Field(() => [RFIDReport])
  nodes: RFIDReport[];
}

@ObjectType()
export class RFIDReportResponseQueryData extends QueryResponseData {
  @Field(() => RFIDReport)
  nodes: RFIDReport;
}

@ObjectType()
export class RFIDReportResponseMutationData extends MutationResponseData {
  @Field(() => RFIDReport)
  nodes: RFIDReport;
}
