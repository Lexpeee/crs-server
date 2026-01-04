import { Injectable } from '@nestjs/common';
import MDamageReport from './db/MDamageReport';
import {
  CreateDamageReportInput,
  UpdateDamageReportInput,
} from './entities/mutation';
import { QUERY_VERSION, RESPONSE_STATUS } from 'src/helpers/_enums';

@Injectable()
export class DamageService {
  async findAll() {
    const reports = await MDamageReport.find().lean();
    return {
      nodes: reports,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }

  async findOne(_id: string) {
    const report = await MDamageReport.findOne({ _id }).lean();
    return {
      nodes: report,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }

  async create(data: CreateDamageReportInput) {
    const newReport = await new MDamageReport(data).save();
    return {
      nodes: newReport,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }

  async update(_id: string, data: UpdateDamageReportInput) {
    const updatedReport = await MDamageReport.findOneAndUpdate(
      { _id },
      { ...data },
    );
    return {
      nodes: updatedReport,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }
}
