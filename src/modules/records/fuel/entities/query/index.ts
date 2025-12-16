import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Fuel {
  @Field(() => ID)
  _id: string;

  @Field(() => ID)
  driverId: string;

  @Field(() => ID)
  rentLogId: string;

  @Field(() => Number)
  lastOdometerReading: number;

  @Field(() => Number)
  newOdometerReading: number;

  @Field(() => String)
  status: string;

  @Field(() => Number)
  amountPaid: number;

  @Field(() => [String], { defaultValue: [] })
  confirmationDocuments?: string;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}
