import { Field, ObjectType } from '@nestjs/graphql';
import {
  MutationResponseData,
  QueryResponseData,
} from 'src/gql/common/entities';
import { VehicleItemsRecord } from './query';

@ObjectType()
export class VehicleItemsRecordsResponseQueryData extends QueryResponseData {
  @Field(() => [VehicleItemsRecord])
  data: VehicleItemsRecord[];
}

@ObjectType()
export class VehicleItemsRecordResponseQueryData extends QueryResponseData {
  @Field(() => VehicleItemsRecord)
  data: VehicleItemsRecord;
}

@ObjectType()
export class VehicleItemsRecordResponseMutationData extends MutationResponseData {
  @Field(() => VehicleItemsRecord)
  data: VehicleItemsRecord;
}
