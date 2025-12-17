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
      data: newRfidReport,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }

  async findAll() {
    const reports = await MRFIDReport.find();
    return {
      data: reports,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }

  async findOne(_id: string) {
    const reportData = await MRFIDReport.findOne({ _id });
    return {
      data: reportData,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }

  update(_id: string, data: UpdateRFIDReportInput) {
    const updatedReport = MRFIDReport.findOneAndUpdate({ _id }, { ...data });
    return {
      data: updatedReport,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }
}
