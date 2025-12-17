import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RepairReport {
  @Field(() => ID)
  _id: string;

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

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
