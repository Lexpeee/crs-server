import { Field, GraphQLISODateTime, ID, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateTransactionLogInput {
  @Field(() => String)
  driverId: string;

  @Field(() => Int)
  amountPaid: number;
}

@InputType()
export class CreateRentInput {
  @Field(() => String)
  driverId: string;

  @Field(() => String)
  vehicleId: string;

  @Field(() => GraphQLISODateTime)
  scheduledDateTime: Date;

  @Field(() => GraphQLISODateTime)
  expectedReturnDateTime: Date;

  @Field(() => Int)
  daysOfRent: string;

  @Field(() => Int)
  price: string;

  @Field(() => [CreateTransactionLogInput], { nullable: true })
  transactions?: CreateTransactionLogInput[];
}

@InputType()
export class UpdateRentInput {
  @Field(() => ID)
  _id: string;

  @Field(() => String, { nullable: true })
  driverId: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  scheduledDateTime: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  expectedReturnDateTime: Date;

  @Field(() => Int, { nullable: true })
  hoursExceeded: number;

  @Field(() => Int, { nullable: true })
  daysOfRent: number;

  @Field(() => Int, { nullable: true })
  price: number;

  @Field(() => [CreateTransactionLogInput], { nullable: true })
  transactions: CreateTransactionLogInput[];

  @Field(() => GraphQLISODateTime, { nullable: true })
  dateReserved?: Date;

  @Field(() => [String], { nullable: true })
  preRentImages: string[];

  @Field(() => [String], { nullable: true })
  postRentImages: string[];

  @Field(() => String, { nullable: true })
  damageLogs: string[];

  @Field(() => Boolean, { nullable: true })
  isCancelled: boolean;

  @Field(() => [String], { nullable: true })
  reasonForCancel: string[];

  @Field(() => GraphQLISODateTime, { nullable: true })
  dateTimeCancelled: Date;

  @Field(() => Boolean, { nullable: true })
  isContractSigned: boolean;

  @Field(() => Boolean, { nullable: true })
  isComprehendContract: boolean;
}
