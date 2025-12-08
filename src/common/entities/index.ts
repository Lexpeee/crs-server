import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SimpleEntities {
  @Field(() => ID)
  _id: string;

  @Field()
  name: string;
}
