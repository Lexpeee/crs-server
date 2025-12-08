import {
  Field,
  GraphQLISODateTime,
  ID,
  Int,
  ObjectType,
} from '@nestjs/graphql';

@ObjectType()
export class Vehicle {
  @Field(() => ID)
  _id: string;

  @Field(() => String, { nullable: false })
  manufacturer: string;

  @Field(() => String, { nullable: false })
  model: string;

  @Field(() => Int, { nullable: false })
  year: string;

  @Field(() => String, { nullable: false })
  color: string;

  @Field(() => String, { nullable: false })
  transmission: string;

  @Field(() => String, { nullable: false })
  type: string;

  @Field(() => String, { nullable: false })
  licenseNumber: string;

  @Field(() => String, { nullable: true })
  userId?: string;

  @Field(() => String)
  totalDistanceTravelled: string;

  @Field(() => String, { nullable: false })
  fuelType: string;

  @Field(() => [String])
  repairLogs: string[];

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}
