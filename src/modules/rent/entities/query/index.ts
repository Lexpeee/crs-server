import {
  ObjectType,
  Field,
  Int,
  ID,
  GraphQLISODateTime,
} from '@nestjs/graphql';

@ObjectType()
export class Rent {
  @Field(() => ID)
  _id: string;

  @Field(() => String)
  vehicleId: string;

  @Field(() => String)
  driverId: string;

  @Field(() => GraphQLISODateTime, { nullable: false })
  scheduledDateTime: Date;

  @Field(() => GraphQLISODateTime, { nullable: false })
  expectedReturnDateTime: Date;

  @Field(() => Int, { defaultValue: 0 })
  hoursExceeded: number;

  @Field(() => Int, { defaultValue: 0 })
  daysOfRent: number;

  @Field()
  price: number;

  @Field(() => [TransactionLog])
  transactions: TransactionLog[];

  @Field(() => GraphQLISODateTime, { nullable: true })
  dateReserved?: Date;

  @Field(() => [String], { nullable: true, defaultValue: [] })
  preRentImages: string[];

  @Field(() => [String], { nullable: true, defaultValue: [] })
  postRentImages: string[];

  @Field(() => [String], { nullable: true })
  damageLogs?: string[];

  @Field(() => Boolean, { defaultValue: false })
  isCancelled: boolean;

  @Field(() => [String], { defaultValue: [] })
  reasonForCancel: string[];

  @Field(() => GraphQLISODateTime, { nullable: true })
  dateTimeCancelled: Date;

  @Field(() => Boolean, { defaultValue: false })
  isContractSigned: boolean;

  @Field(() => Boolean, { defaultValue: false })
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
