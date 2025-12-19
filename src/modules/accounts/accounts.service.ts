import { Injectable } from '@nestjs/common';
import { CreateAccountInput } from './entities/mutation';
import { QUERY_VERSION, RESPONSE_STATUS } from 'src/helpers/_enums';

@Injectable()
export class AccountsService {
  create(data: CreateAccountInput) {
    const newAccount = data;
    return {
      data: newAccount,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }

  login(data: CreateAccountInput) {
    const newAccount = data;
    return {
      data: newAccount,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }
}
