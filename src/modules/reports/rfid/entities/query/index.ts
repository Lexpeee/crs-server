import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RFIDReport {
  @Field(() => ID)
  _id: string;

  @Field(() => ID)
  rentLogId: string;

  @Field(() => String)
  type: 'autosweep' | 'easytrip';

  @Field(() => Number)
  currentBalance: number;

  @Field(() => Number)
  remainingBalance: number;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
}
