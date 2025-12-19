import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ResponseData {
  @Field(() => String, { nullable: true })
  status?: string;

  @Field(() => String)
  version: string;

  @Field(() => String, { nullable: true })
  message?: string;

  @Field(() => String, { nullable: true })
  error?: string;
}

@ObjectType()
export class QueryResponseData extends ResponseData {
  @Field(() => Int, { nullable: true })
  count?: number;
}

@ObjectType()
export class MutationResponseData extends ResponseData {
  @Field(() => [KeyValuePair], { nullable: true })
  updatedFields?: Record<string, string>[];
}

/**
 * Used for dynamic objects
 */
@ObjectType()
export class KeyValuePair {
  @Field()
  key: string;

  @Field()
  value: string; // Must be a consistent, predefined type
}
