import { Field, ObjectType } from '@nestjs/graphql';
import {
  MutationResponseData,
  QueryResponseData,
} from 'src/gql/common/entities';
import { FuelRecord } from './query';

@ObjectType()
export class FuelRecordsResponseQueryData extends QueryResponseData {
  @Field(() => [FuelRecord])
  nodes: FuelRecord[];
}

@ObjectType()
export class FuelRecordResponseQueryData extends QueryResponseData {
  @Field(() => FuelRecord)
  nodes: FuelRecord;
}

@ObjectType()
export class FuelRecordResponseMutationData extends MutationResponseData {
  @Field(() => FuelRecord, { nullable: true })
  nodes?: FuelRecord;
}
