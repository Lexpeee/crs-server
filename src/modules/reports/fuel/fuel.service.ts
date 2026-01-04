import { Injectable } from '@nestjs/common';
import { QUERY_VERSION, RESPONSE_STATUS } from 'src/helpers/_enums';
import MFuelRecord from './db/MFuelRecord';
import { CreateFuelInput, UpdateFuelInput } from './entities/mutation';

@Injectable()
export class FuelService {
  async create(data: CreateFuelInput) {
    const newFuelRecord = await new MFuelRecord(data).save();
    return {
      nodes: newFuelRecord,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }

  async findAll() {
    const records = await MFuelRecord.find();
    return {
      count: records.length,
      nodes: records,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }

  async findOne(_id: string) {
    const records = await MFuelRecord.findOne({ _id }).lean();
    return {
      nodes: records,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }

  async update(_id: string, data: UpdateFuelInput) {
    const updatedRecord = await MFuelRecord.findOneAndUpdate(
      { _id },
      { ...data },
    ).lean();

    return {
      nodes: updatedRecord,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }

  async remove(_id: string) {
    const removedRecord = await MFuelRecord.deleteOne({ _id });

    return {
      status: removedRecord ? RESPONSE_STATUS.OK : RESPONSE_STATUS.ERROR,
      version: QUERY_VERSION.v1,
    };
  }
}
