import { Injectable } from '@nestjs/common';
import { CreateDriverInput, UpdateDriverInput } from './entities/mutation';
import { MDriver } from './db/MDriver';
import { Driver } from './entities/_types';

@Injectable()
export class DriverService {
  async create(data: CreateDriverInput) {
    const newDriver: Partial<Driver> = {
      ...data,
      numberOfVehiclesUsed: 0,
      isInHouseDriver: false,
      totalDriveCount: 0,
      totalDistanceTravelled: 0,
      flags: [],
      notes: [],
    };
    return await new MDriver(newDriver).save();
  }

  async findAll(filters = {}) {
    return await MDriver.find(filters);
  }

  async findOne(driverId: string) {
    return await MDriver.findOne({ _id: driverId }).lean();
  }

  async update(_id: string, data: UpdateDriverInput) {
    return await MDriver.findOneAndUpdate({ _id }, { ...data }, { new: true });
  }
}
