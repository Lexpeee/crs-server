import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class CreateVehicleItemsInput {
  @Field(() => ID)
  vehicleId: string;

  @Field(() => ID)
  rentLogId: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  serialNumber: string;

  @Field(() => String)
  type: string;

  @Field(() => String)
  description: string;

  @Field(() => [String], { defaultValue: [] })
  image?: string[];

  @Field(() => String)
  inclusions: string;

  @Field(() => [String], { defaultValue: [] })
  notes?: string[];
}

@InputType()
export class UpdateVehicleItemsInput extends CreateVehicleItemsInput {
  @Field(() => ID)
  _id: string;
}
