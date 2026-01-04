import { Field, ObjectType } from '@nestjs/graphql';
import { RentAuditLog } from './query';
import {
  MutationResponseData,
  QueryResponseData,
} from 'src/gql/common/entities';

@ObjectType()
export class RentAuditLogsResponseQueryData extends QueryResponseData {
  @Field(() => [RentAuditLog])
  nodes: RentAuditLog[];
}

@ObjectType()
export class RentAuditLogResponseQueryData extends QueryResponseData {
  @Field(() => RentAuditLog)
  nodes: RentAuditLog;
}

@ObjectType()
export class RentAuditLogResponseMutationData extends MutationResponseData {
  @Field(() => RentAuditLog)
  nodes: RentAuditLog;
}
