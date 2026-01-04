import { Field, ObjectType } from '@nestjs/graphql';
import { PrintAuditLog } from './query';
import {
  MutationResponseData,
  QueryResponseData,
} from 'src/gql/common/entities';

@ObjectType()
export class PrintAuditLogsResponseQueryData extends QueryResponseData {
  @Field(() => [PrintAuditLog])
  nodes: PrintAuditLog[];
}

@ObjectType()
export class PrintAuditLogResponseQueryData extends QueryResponseData {
  @Field(() => PrintAuditLog)
  nodes: PrintAuditLog;
}

@ObjectType()
export class PrintAuditLogResponseMutationData extends MutationResponseData {
  @Field(() => PrintAuditLog)
  nodes: PrintAuditLog;
}
