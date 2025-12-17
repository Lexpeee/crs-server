import { Field, ID, InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class CreateRFIDReportInput {
  @Field(() => ID)
  rentLogId: string;

  @Field(() => String)
  type: 'autosweep' | 'easytrip';

  @Field(() => Number)
  currentBalance: number;

  @Field(() => Number)
  remainingBalance: number;
}

@InputType()
export class UpdateRFIDReportInput extends PartialType(CreateRFIDReportInput) {}
