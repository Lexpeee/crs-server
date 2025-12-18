import { Injectable } from '@nestjs/common';
import MPrintAuditLog from './db/MPrintAuditLogs';
import {
  CreatePrintAuditLogInput,
  UpdatePrintAuditLogInput,
} from './entities/mutation';
import { QUERY_VERSION, RESPONSE_STATUS } from 'src/helpers/_enums';

@Injectable()
export class PrintLogsService {
  async findAll() {
    const logs = await MPrintAuditLog.find().lean();
    return {
      count: logs.length,
      data: logs,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }

  async findOne(_id: string) {
    const log = await MPrintAuditLog.findOne({ _id });

    return {
      data: log,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }

  async create(data: CreatePrintAuditLogInput) {
    const newLog = await new MPrintAuditLog(data).save();
    return {
      data: newLog,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }

  async update(_id: string, data: UpdatePrintAuditLogInput) {
    const updatedLog = await MPrintAuditLog.findOneAndUpdate(
      { _id },
      { ...data },
    );
    return {
      data: updatedLog,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }
}
