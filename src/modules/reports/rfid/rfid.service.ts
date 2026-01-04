import { Injectable } from '@nestjs/common';
import {
  CreateRFIDReportInput,
  UpdateRFIDReportInput,
} from './entities/mutation';
import MRFIDReport from './db/MRFIDReport';
import { QUERY_VERSION, RESPONSE_STATUS } from 'src/helpers/_enums';

@Injectable()
export class RfidService {
  async create(data: CreateRFIDReportInput) {
    const newRfidReport = await new MRFIDReport(data).save();
    return {
      nodes: newRfidReport,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }

  async findAll() {
    const reports = await MRFIDReport.find();
    return {
      nodes: reports,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }

  async findOne(_id: string) {
    const reportData = await MRFIDReport.findOne({ _id });
    return {
      nodes: reportData,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }

  update(_id: string, data: UpdateRFIDReportInput) {
    const updatedReport = MRFIDReport.findOneAndUpdate({ _id }, { ...data });
    return {
      nodes: updatedReport,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }
}
