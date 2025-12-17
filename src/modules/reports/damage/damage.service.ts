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
      data: reports,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }

  async findOne(_id: string) {
    const report = await MDamageReport.findOne({ _id }).lean();
    return {
      data: report,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }

  async create(data: CreateDamageReportInput) {
    const newReport = await new MDamageReport(data).save();
    return {
      data: newReport,
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
      data: updatedReport,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }
}
