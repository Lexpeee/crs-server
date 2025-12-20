import { Field, ObjectType } from '@nestjs/graphql';
import { Account } from './query';
import {
  MutationResponseData,
  QueryResponseData,
} from 'src/gql/common/entities';

@ObjectType()
export class AccountsResponseQueryData extends QueryResponseData {
  @Field(() => [Account])
  data: Account[];
}

@ObjectType()
export class AccountResponseQueryData extends QueryResponseData {
  @Field(() => Account)
  data: Account;
}

@ObjectType()
export class AccountResponseMutationData extends MutationResponseData {
  @Field(() => Account)
  data: Account;
}
