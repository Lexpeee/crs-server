import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class ResponseData {
  @Field(() => String, { nullable: true })
  status?: string;

  @Field(() => Int)
  count?: number;

  @Field(() => String)
  version: string;
}

/**
 * Used for dynamic objects
 */
@InputType()
export class KeyValuePair {
  @Field()
  key: string;

  @Field()
  value: string; // Must be a consistent, predefined type
}
