import { Injectable } from '@nestjs/common';
import { QUERY_VERSION } from 'src/helpers/_enums';
import { UpdateDriverInput } from '../driver/entities/mutation';
import { MVehicle } from './db/MVehicle';
import { CreateVehicleInput } from './entities/mutation';

@Injectable()
export class VehicleService {
  async create(data: CreateVehicleInput) {
    const newVehicleData = {
      ...data,
      totalDistanceTravelled: 0,
    };
    const newVehicle = await new MVehicle(newVehicleData).save();
    return {
      data: newVehicle,
      version: QUERY_VERSION.v1,
    };
  }

  async findAll() {
    const vehicles = await MVehicle.find().lean();
    return {
      count: vehicles.length,
      data: vehicles,
      version: QUERY_VERSION.v1,
    };
  }

  async find(_id: string) {
    const vehicleData = await MVehicle.findOne({ _id }).lean();
    return {
      data: vehicleData,
      version: QUERY_VERSION.v1,
    };
  }

  async update(_id: string, data: UpdateDriverInput) {
    const updatedVehicleData = await MVehicle.findOneAndUpdate(
      { _id },
      { ...data },
      { new: true },
    );
    return {
      data: updatedVehicleData,
      version: QUERY_VERSION.v1,
    };
  }
}
