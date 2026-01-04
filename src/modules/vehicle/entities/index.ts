import { Field, ObjectType } from '@nestjs/graphql';
import {
  MutationResponseData,
  QueryResponseData,
} from 'src/gql/common/entities';
import { Vehicle } from './query';

@ObjectType()
export class VehiclesResponseQueryData extends QueryResponseData {
  @Field(() => [Vehicle])
  nodes: Vehicle[];
}

@ObjectType()
export class VehicleResponseQueryData extends QueryResponseData {
  @Field(() => Vehicle)
  nodes: Vehicle;
}

@ObjectType()
export class VehicleResponseMutationData extends MutationResponseData {
  @Field(() => Vehicle)
  nodes: Vehicle;
}
