import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateAccountInput {
  email: string;
  username: string;
  password: string;
  accountType: string;
}

@InputType()
export class LoginAccountInput {
  email: string;
  password: string;
}
