import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AccountsService } from './accounts.service';
import { CreateAccountInput } from './entities/mutation';
import { AccountResponseMutationData } from './entities';

@Resolver()
export class AccountsResolver {
  constructor(private readonly accountsService: AccountsService) {}

  @Mutation(() => AccountResponseMutationData)
  createAccount(@Args('data') data: CreateAccountInput) {
    return this.accountsService.create(data);
  }

  @Mutation(() => AccountResponseMutationData)
  loginAccount(@Args('data') data: CreateAccountInput) {
    return this.accountsService.login(data);
  }
}
