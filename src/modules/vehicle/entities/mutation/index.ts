import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateVehicleInput {
  @Field(() => String, { nullable: false })
  manufacturer: string;

  @Field(() => String, { nullable: false })
  model: string;

  @Field(() => Int, { nullable: false })
  year: number;

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

  @Field(() => String, { nullable: false })
  fuelType: string;
}

@InputType()
export class UpdateVehicleInput {
  @Field(() => String, { nullable: true })
  manufacturer?: string;

  @Field(() => String, { nullable: true })
  model?: string;

  @Field(() => Int, { nullable: true })
  year?: number;

  @Field(() => String, { nullable: true })
  color?: string;

  @Field(() => String, { nullable: true })
  transmission?: string;

  @Field(() => String, { nullable: true })
  type?: string;

  @Field(() => String, { nullable: true })
  licenseNumber?: string;

  @Field(() => String, { nullable: true })
  userId?: string;

  @Field(() => String, { nullable: true })
  fuelType?: string;
}
