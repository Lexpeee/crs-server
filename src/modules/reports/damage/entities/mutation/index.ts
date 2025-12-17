import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class CreateDamageReportInput {
  @Field(() => ID)
  vehicleId: string;

  @Field(() => ID)
  driverId: string;

  @Field(() => ID)
  rentLogId: string;

  @Field(() => [String], { defaultValue: [] })
  images: string[];

  @Field(() => String)
  vehiclePart: string;

  @Field(() => String)
  status: string;

  @Field(() => String)
  sense: string;

  @Field(() => Number)
  amountPaid: number;

  @Field(() => String)
  source: string;

  @Field(() => [ID], { defaultValue: [] })
  repairIds?: string[];
}

@InputType()
export class UpdateDamageReportInput extends PartialType(
  CreateDamageReportInput,
) {}
