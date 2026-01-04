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
      nodes: logs,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }

  async findOne(_id: string) {
    const log = await MPrintAuditLog.findOne({ _id });

    return {
      nodes: log,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }

  async create(data: CreatePrintAuditLogInput) {
    const newLog = await new MPrintAuditLog(data).save();
    return {
      nodes: newLog,
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
      nodes: updatedLog,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }
}
