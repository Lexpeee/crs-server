import { Injectable } from '@nestjs/common';
import { CreateRentInput, UpdateRentInput } from './entities/mutation';
import { MRent } from './db/MRent';
import { RentLogsService } from '../logs/rent.logs/rent.logs.service';

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

    return newRent;
  }

  async findAll() {
    return await MRent.find();
  }

  async findOne(_id: string) {
    return await MRent.findOne({ _id }).lean();
  }

  async update(_id: string, data: UpdateRentInput) {
    return await MRent.findOneAndUpdate({ _id }, { ...data });
  }
}
