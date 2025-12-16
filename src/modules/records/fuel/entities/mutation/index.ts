import { Field, ID, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class CreateFuelInput {
  @Field(() => ID)
  driverId: string;

  @Field(() => ID)
  vehicleId: string;

  @Field(() => ID)
  rentLogId: string;

  @Field(() => Int)
  lastOdometerReading: number;

  @Field(() => Int)
  newOdometerReading: number;

  @Field(() => String)
  status: string;

  @Field(() => Int)
  amountPaid: number;

  @Field(() => [String], { nullable: true })
  confirmationDocuments?: string[];
}

@InputType()
export class UpdateFuelInput extends PartialType(CreateFuelInput) {}
