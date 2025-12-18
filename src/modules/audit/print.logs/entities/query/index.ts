import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PrintAuditLog {
  @Field(() => ID)
  _id: string;

  @Field(() => String)
  documentId: string;

  @Field(() => String)
  fileUrl: string;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
}
