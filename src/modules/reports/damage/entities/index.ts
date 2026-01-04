import { Field, ObjectType } from '@nestjs/graphql';
import { DamageReport } from './query';
import {
  MutationResponseData,
  QueryResponseData,
} from 'src/gql/common/entities';

@ObjectType()
export class DamageReportsResponseQueryData extends QueryResponseData {
  @Field(() => [DamageReport])
  nodes: DamageReport[];
}

@ObjectType()
export class DamageReportResponseQueryData extends QueryResponseData {
  @Field(() => DamageReport)
  nodes: DamageReport;
}

@ObjectType()
export class DamageReportResponseMutationData extends MutationResponseData {
  @Field(() => DamageReport)
  nodes: DamageReport;
}
