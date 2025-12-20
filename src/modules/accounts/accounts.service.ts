import { Injectable } from '@nestjs/common';
import { QUERY_VERSION, RESPONSE_STATUS } from 'src/helpers/_enums';
import MAccount from './db/MAccount';
import { CreateAccountInput, LoginAccountInput } from './entities/mutation';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AccountsService {
  async create(data: CreateAccountInput) {
    try {
      const account = await MAccount.findOne({
        $or: [{ email: data.email }, { username: data.username }],
      }).lean();
      if (account) {
        return {
          data: null,
          status: RESPONSE_STATUS.ERROR,
          version: QUERY_VERSION.v1,
        };
      }

      const newData = data;
      const hashedPassword = (await bcrypt.hash(data.password, 10)) as string;
      newData.password = hashedPassword;

      const newAccount = await new MAccount(newData).save();
      return {
        data: newAccount,
        status: RESPONSE_STATUS.OK,
        version: QUERY_VERSION.v1,
      };
    } catch (error) {
      return {
        error: error.message,
        status: RESPONSE_STATUS.OK,
        version: QUERY_VERSION.v1,
      };
    }
  }

  login(data: LoginAccountInput) {
    const newAccount = data;
    return {
      data: newAccount,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }
}
