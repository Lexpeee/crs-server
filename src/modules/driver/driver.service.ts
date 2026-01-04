import { Injectable } from '@nestjs/common';
import { CreateDriverInput, UpdateDriverInput } from './entities/mutation';
import { MDriver } from './db/MDriver';
import { Driver } from './entities/_types';
import { QUERY_VERSION, RESPONSE_STATUS } from 'src/helpers/_enums';

@Injectable()
export class DriverService {
  async create(data: CreateDriverInput) {
    const newDriverData: Partial<Driver> = {
      ...data,
      numberOfVehiclesUsed: 0,
      isInHouseDriver: false,
      totalDriveCount: 0,
      totalDistanceTravelled: 0,
      flags: [],
      notes: [],
    };
    const newDriver = await new MDriver(newDriverData).save();
    return {
      nodes: newDriver,
      status: newDriver._id ? RESPONSE_STATUS.OK : RESPONSE_STATUS.ERROR,
      version: QUERY_VERSION.v1,
    };
  }

  async findAll(filters = {}) {
    const drivers = await MDriver.find(filters).lean();
    return {
      count: drivers.length,
      nodes: drivers,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }

  async findOne(driverId: string) {
    const driverData = await MDriver.findOne({ _id: driverId }).lean();
    return {
      nodes: driverData,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }

  async update(_id: string, data: UpdateDriverInput) {
    const updatedDriverData = await MDriver.findOneAndUpdate(
      { _id },
      { ...data },
      { new: true },
    );
    return {
      nodes: updatedDriverData,
      status: RESPONSE_STATUS.OK,
      version: QUERY_VERSION.v1,
    };
  }
}
