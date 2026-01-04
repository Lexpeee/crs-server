import { Injectable } from '@nestjs/common';
import { RESPONSE_STATUS, QUERY_VERSION } from 'src/helpers/_enums';
import {
  CreateRepairReportInput,
  UpdateRepairReportInput,
} from './entities/mutation';
import MRepairReport from './db/MRepairReport';

@Injectable()
export class RepairService {
  async create(data: CreateRepairReportInput) {
    const newReport = await new MRepairReport(data).save();
    return {
      nodes: newReport,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }

  async findAll() {
    const reports = await MRepairReport.find().lean();
    return {
      nodes: reports,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }

  async findOne(_id: string) {
    const report = await MRepairReport.findOne({ _id }).lean();
    return {
      nodes: report,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }

  async update(_id: string, data: UpdateRepairReportInput) {
    const updatedReport = await MRepairReport.findOneAndUpdate(
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
