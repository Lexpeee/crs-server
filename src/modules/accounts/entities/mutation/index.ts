import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAccountInput {
  @Field(() => String)
  email: string;

  @Field(() => String)
  username: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  accountType: string;
}

@InputType()
export class LoginAccountInput {
  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}
