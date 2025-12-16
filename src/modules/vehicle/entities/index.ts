import { Field, ObjectType } from '@nestjs/graphql';
import {
  MutationResponseData,
  QueryResponseData,
} from 'src/gql/common/entities';
import { Vehicle } from './query';

@ObjectType()
export class VehiclesResponseQueryData extends QueryResponseData {
  @Field(() => [Vehicle])
  data: Vehicle[];
}

@ObjectType()
export class VehicleResponseQueryData extends QueryResponseData {
  @Field(() => Vehicle)
  data: Vehicle;
}

@ObjectType()
export class VehicleResponseMutationData extends MutationResponseData {
  @Field(() => Vehicle)
  data: Vehicle;
}
