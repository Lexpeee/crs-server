import { ObjectType, Field, Int, ID, GraphQLISODateTime } from '@nestjs/graphql';

@ObjectType()
export class Rent {
  @Field(() => ID)
  _id: string;

  @Field(() => String)
  vehicleId: string;

  @Field(() => String)
  driverId: string;

  @Field(() => GraphQLISODateTime, { nullable: false})
  scheduledDateTime: Date;

  @Field(() => GraphQLISODateTime ,{ nullable: false})
  expectedReturnDateTime: Date;

  @Field(() => Int)
  hoursExceeded: number;

  @Field(() => Int, { defaultValue: 0})
  daysOfRent: number;

  @Field()
  price: number;

  @Field(() => [TransactionLog])
  transactions: TransactionLog[];

  @Field()
  dateReserved: Date;

  @Field(() => [String])
  preRentImages: string[];

  @Field(() => [String])
  postRentImages: string[];

  @Field(() => String)
  damageLogs: string[];

  @Field(() => Boolean)
  isCancelled: boolean;

  @Field(() => [String])
  reasonForCancel: string[];

  @Field(() => GraphQLISODateTime, { nullable: true })
  dateTimeCancelled: Date;

  @Field(() => Boolean, { defaultValue: false})
  isContractSigned: boolean;

  @Field(() => Boolean, { defaultValue: false})
  isComprehendContract: boolean;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}

@ObjectType()
export class TransactionLog {
  @Field(() => String)
  _id: string;

  @Field(() => String)
  driverId: string;

  @Field(() => Int)
  amountPaid: number;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}
