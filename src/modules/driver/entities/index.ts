import { Field, ObjectType } from '@nestjs/graphql';
import { Driver } from './query';
import {
  MutationResponseData,
  QueryResponseData,
} from 'src/gql/common/entities';

@ObjectType()
export class DriversResponseQueryData extends QueryResponseData {
  @Field(() => [Driver])
  nodes: Driver[];
}

@ObjectType()
export class DriverResponseQueryData extends QueryResponseData {
  @Field(() => Driver)
  nodes: Driver;
}

@ObjectType()
export class DriverResponseMutationData extends MutationResponseData {
  @Field(() => Driver)
  nodes: Driver;
}
