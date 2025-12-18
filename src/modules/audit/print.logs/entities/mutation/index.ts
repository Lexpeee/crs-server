import {
  Field,
  GraphQLISODateTime,
  ID,
  InputType,
  PartialType,
} from '@nestjs/graphql';

@InputType()
export class CreatePrintAuditLogInput {
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

@InputType()
export class UpdatePrintAuditLogInput extends PartialType(
  CreatePrintAuditLogInput,
) {}
