import { Field, ID, InputType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

@InputType()
export class CreateRentAuditLogInput {
  @Field(() => ID)
  rentId: string;

  @Field(() => String)
  type: string;

  @Field(() => String)
  message: string;

  @Field(() => [GraphQLJSON], { defaultValue: [] })
  tags?: Record<string, string>[];
}
