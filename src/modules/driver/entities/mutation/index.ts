import {
  Field,
  GraphQLISODateTime,
  InputType,
  PartialType,
} from '@nestjs/graphql';
import * as types from '../_types';

@InputType()
class DriverProfileInput {
  @Field(() => DriverProfileNameInput)
  name: types.DriverProfile['name'];

  @Field(() => GraphQLISODateTime)
  birthday: Date;

  @Field(() => String)
  gender: types.DriverProfile['gender'];

  @Field(() => String)
  contactNumber: string;

  @Field(() => String)
  emailAddress: string;
}

@InputType()
class DriverProfileNameInput {
  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String, { nullable: true })
  maidenName?: string;

  @Field(() => String, { nullable: true })
  middleInitial?: string;

  @Field(() => String, { nullable: true })
  suffix?: string;
}

@InputType()
export class CreateDriverInput {
  @Field(() => DriverProfileInput)
  profile: types.DriverProfile;

  @Field(() => String)
  licenseNumber: string;

  @Field(() => String)
  licenseType: string;

  @Field(() => String)
  licenseCode: string;

  @Field(() => [String], { nullable: true })
  notes: string[];
}

@InputType()
export class UpdateDriverInput extends PartialType(CreateDriverInput) {
  @Field(() => DriverProfileInput, { nullable: true })
  profile?: types.DriverProfile;

  @Field(() => String, { nullable: true })
  licenseNumber?: string;

  @Field(() => String, { nullable: true })
  licenseType?: string;

  @Field(() => String, { nullable: true })
  licenseCode?: string;

  @Field(() => [String], { nullable: true })
  notes?: string[];
}
