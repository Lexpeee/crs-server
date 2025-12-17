import { Injectable } from '@nestjs/common';
import { QUERY_VERSION, RESPONSE_STATUS } from 'src/helpers/_enums';
import MRentAuditLog from './db/MRentAuditLogs';
import { RentAuditLog } from './entities/_types';
import { CreateRentAuditLogInput } from './entities/mutation';

@Injectable()
export class RentLogsService {
  async findAll(filters: Record<string, string>[] | undefined = undefined) {
    const rentLogs = await MRentAuditLog.find(filters || {});
    return {
      data: rentLogs,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }

  async findOne(_id: string) {
    const rentData = await MRentAuditLog.findOne({ _id }).lean();
    return {
      data: rentData,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }

  async create(data: CreateRentAuditLogInput | Partial<RentAuditLog>) {
    const newRentLog = await new MRentAuditLog(data).save();
    return {
      data: newRentLog,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }
}
