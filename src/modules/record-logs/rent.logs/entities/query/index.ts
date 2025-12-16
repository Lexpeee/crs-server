import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

@ObjectType()
export class RentAuditLog {
  @Field(() => ID)
  _id: string;

  @Field(() => ID)
  rentId: string;

  @Field(() => String)
  type: string;

  @Field(() => String)
  message: string;

  @Field(() => [GraphQLJSON], { defaultValue: [] })
  tags?: Record<string, string>[];

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  updatedAt?: Date;
}
