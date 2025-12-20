import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AccountsService } from './accounts.service';
import { CreateAccountInput, LoginAccountInput } from './entities/mutation';
import { AccountResponseMutationData } from './entities';

@Resolver()
export class AccountsResolver {
  constructor(private readonly accountsService: AccountsService) {}

  @Mutation(() => AccountResponseMutationData)
  createAccount(@Args('data') data: CreateAccountInput) {
    return this.accountsService.create(data);
  }

  @Mutation(() => AccountResponseMutationData)
  loginAccount(@Args('data') data: LoginAccountInput) {
    return this.accountsService.login(data);
  }
}
