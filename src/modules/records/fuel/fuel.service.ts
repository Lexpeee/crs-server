import { Injectable } from '@nestjs/common';
import { QUERY_VERSION } from 'src/helpers/_enums';
import MFuelRecord from './db/MFuelRecord';
import { CreateFuelInput, UpdateFuelInput } from './entities/mutation';

@Injectable()
export class FuelService {
  async create(data: CreateFuelInput) {
    const newFuelRecord = await new MFuelRecord(data).save();
    return {
      data: newFuelRecord,
      version: QUERY_VERSION.v1,
    };
  }

  async findAll() {
    const records = await MFuelRecord.find();
    return {
      count: records.length,
      data: records,
      version: QUERY_VERSION.v1,
    };
  }

  async findOne(_id: string) {
    const records = await MFuelRecord.findOne({ _id }).lean();
    return {
      data: records,
      version: QUERY_VERSION.v1,
    };
  }

  async update(_id: string, data: UpdateFuelInput) {
    const updatedRecord = await MFuelRecord.findOneAndUpdate(
      { _id },
      { ...data },
    ).lean();

    return {
      data: updatedRecord,
      version: QUERY_VERSION.v1,
    };
  }

  async remove(_id: string) {
    const removedRecord = await MFuelRecord.deleteOne({ _id });

    return {
      status: !!removedRecord,
      version: QUERY_VERSION.v1,
    };
  }
}
