import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';
import { SimpleEntities } from 'src/common/entities';

@ObjectType()
export class Rent {
  @Field()
  _id: string;

  @Field()
  driver: SimpleEntities;

  @Field()
  vehicle: SimpleEntities;

  @Field(() => GraphQLISODateTime)
  scheduledDateTime: Date;

  @Field(() => GraphQLISODateTime)
  expectedReturnDateTime: Date;

  @Field(() => Int)
  hoursExceeded: number;

  @Field(() => Int)
  daysOfRent: number;

  @Field(() => Int)
  price: number;

  @Field(() => [String])
  transactions: string[];

  @Field(() => GraphQLISODateTime, { nullable: true })
  dateReserved?: Date;

  @Field(() => [String], { nullable: true, defaultValue: [] })
  preRentImages?: string[];

  @Field(() => [String], { nullable: true, defaultValue: [] })
  postRentImages?: string[];

  @Field(() => [String], { defaultValue: [] })
  damageLogs?: string[];

  @Field(() => Boolean, { defaultValue: false })
  isCancelled?: boolean;

  @Field(() => [String], { defaultValue: [] })
  reasonsForCancel: string[];

  @Field(() => Date, { nullable: true })
  dateTimeCancelled?: Date;

  @Field(() => Boolean, { defaultValue: false })
  isContractSigned: boolean;

  @Field(() => Boolean, { defaultValue: false })
  isComprehendContract: boolean;
}
