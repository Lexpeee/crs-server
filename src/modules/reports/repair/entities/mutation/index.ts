import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class CreateRepairReportInput {
  @Field(() => ID)
  driverId: string;

  @Field(() => ID)
  vehicleId: string;

  @Field(() => ID)
  damageLogId: string;

  @Field(() => [String])
  notes: string[];

  @Field(() => Number, { nullable: true })
  amountPaid?: number;
}

@InputType()
export class UpdateRepairReportInput extends CreateRepairReportInput {}