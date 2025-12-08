import {
  Field,
  GraphQLISODateTime,
  ID,
  Int,
  ObjectType,
} from '@nestjs/graphql';
import * as types from '../_types';

@ObjectType()
export class Driver {
  @Field(() => ID)
  _id: string;

  @Field(() => DriverProfile)
  profile: types.DriverProfile;

  @Field(() => String)
  licenseNumber: string;

  @Field(() => String)
  licenseType: string;

  @Field(() => String)
  licenseCode: string;

  @Field(() => Int)
  numberOfVehiclesUsed: number;

  @Field(() => Int)
  totalDriveCount: number;

  @Field(() => Boolean)
  isInHouseDriver: boolean;

  @Field(() => [String])
  notes: string[];

  @Field(() => [String]) // array of id logs
  flags: string[];

  @Field(() => GraphQLISODateTime)
  createdAt: Date;
}

@ObjectType()
export class DriverProfile {
  @Field(() => DriverName, { nullable: false })
  name: types.DriverProfile['name'];

  @Field(() => GraphQLISODateTime, { nullable: false })
  birthday: Date;

  @Field(() => String, { nullable: false })
  gender: types.DriverProfile['gender'];

  @Field(() => String)
  contactNumber: string;

  @Field(() => String)
  emailAddress: string;
}

@ObjectType()
export class DriverName {
  @Field({ nullable: false })
  firstName: string;

  @Field({ nullable: false })
  lastName: string;

  @Field({ nullable: true })
  maidenName?: string;

  @Field({ nullable: true })
  middleInitial?: string;

  @Field({ nullable: true })
  suffix?: string;
}
