import { Field, InputType } from '@nestjs/graphql';

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
