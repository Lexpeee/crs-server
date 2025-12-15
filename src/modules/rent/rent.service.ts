import { Injectable } from '@nestjs/common';
import { CreateRentInput, UpdateRentInput } from './entities/mutation';
import { MRent } from './db/MRent';
import { RentLogsService } from '../logs/rent.logs/rent.logs.service';
import { QUERY_VERSION } from 'src/helpers/_enums';

@Injectable()
export class RentService {
  constructor(private rentLogsService: RentLogsService) {}
  async create(data: CreateRentInput) {
    const newRent = await new MRent(data).save();

    // add rent to logs
    const newRentLog = {
      rentId: newRent._id,
      type: 'add',
      message: `Added ${newRent.daysOfRent} days of rent for driver {{@driverId:${newRent.driverId}}}`,
      tags: [{ driverId: newRent.driverId }],
    };
    await this.rentLogsService.create(newRentLog);

    return {
      data: newRent,
      version: QUERY_VERSION.v1,
    };
  }

  async findAll() {
    const rentsData = await MRent.find().lean();
    return {
      count: rentsData.length,
      data: rentsData,
      version: QUERY_VERSION.v1,
    };
  }

  async findOne(_id: string) {
    const rentData = await MRent.findOne({ _id }).lean();
    return {
      data: rentData,
      version: QUERY_VERSION.v1,
    };
  }

  async update(_id: string, data: UpdateRentInput) {
    const updatedRentData = await MRent.findOneAndUpdate({ _id }, { ...data });
    return {
      data: updatedRentData,
      version: QUERY_VERSION.v1,
    };
  }
}
