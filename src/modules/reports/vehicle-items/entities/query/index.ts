import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class VehicleItemsRecord {
  @Field(() => ID)
  _id: string;

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
  image: string[];

  @Field(() => String)
  inclusions: string;

  @Field(() => [String], { defaultValue: [] })
  notes: string[];

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}
