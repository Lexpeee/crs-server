import { Injectable } from '@nestjs/common';
import { UpdateDriverInput } from '../driver/entities/mutation';
import { MVehicle } from './db/MVehicle';
import { CreateVehicleInput } from './entities/mutation';

@Injectable()
export class VehicleService {
  async create(data: CreateVehicleInput) {
    const newData = {
      ...data,
      totalDistanceTravelled: 0,
    };
    return await new MVehicle(newData).save();
  }

  async findAll() {
    return await MVehicle.find();
  }

  async find(_id: string) {
    return await MVehicle.findOne({ _id }).lean();
  }

  async update(_id: string, data: UpdateDriverInput) {
    return await MVehicle.findOneAndUpdate({ _id }, { ...data }, { new: true });
  }
}
