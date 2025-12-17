import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DamageReport {
  @Field(() => ID)
  _id: string;

  @Field(() => ID)
  vehicleId: string;

  @Field(() => ID)
  driverId: string;

  @Field(() => ID)
  rentLogId: string;

  @Field(() => [String], { defaultValue: [] })
  images: string[];

  @Field(() => String)
  vehiclePart: string;

  @Field(() => String)
  status: string;

  @Field(() => String)
  sense: string;

  @Field(() => Number)
  amountPaid: number;

  @Field(() => String)
  source: string;

  @Field(() => [ID])
  repairIds?: string[];

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt?: Date;
}
