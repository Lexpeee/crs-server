import { Field, ObjectType } from '@nestjs/graphql';
import { Rent } from './query';
import {
  MutationResponseData,
  QueryResponseData,
} from 'src/gql/common/entities';

@ObjectType()
export class RentsResponseQueryData extends QueryResponseData {
  @Field(() => [Rent])
  data: Rent[];
}

@ObjectType()
export class RentResponseQueryData extends QueryResponseData {
  @Field(() => Rent)
  data: Rent;
}

@ObjectType()
export class RentResponseMutationData extends MutationResponseData {
  @Field(() => Rent)
  data: Rent;
}
