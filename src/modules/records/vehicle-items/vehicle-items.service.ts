import { Injectable } from '@nestjs/common';
import { QUERY_VERSION } from 'src/helpers/_enums';
import MVehicleItemsRecords from './db/MVehicleItemsRecords';
import {
  CreateVehicleItemsInput,
  UpdateVehicleItemsInput,
} from './entities/mutation';

@Injectable()
export class VehicleItemsService {
  async create(data: CreateVehicleItemsInput) {
    const newVehicleItem = await new MVehicleItemsRecords(data).save();
    return {
      data: newVehicleItem,
      version: QUERY_VERSION.v1,
    };
  }

  async findAll() {
    const vehicleItems = await MVehicleItemsRecords.find().lean();
    return {
      count: vehicleItems.length,
      data: vehicleItems,
      version: QUERY_VERSION.v1,
    };
  }

  async findOne(_id: string) {
    const vehicleItems = await MVehicleItemsRecords.findOne({ _id }).lean();
    return {
      data: vehicleItems,
      version: QUERY_VERSION.v1,
    };
  }

  async update(_id: string, data: UpdateVehicleItemsInput) {
    const vehicleItems = await MVehicleItemsRecords.findOneAndUpdate(
      { _id },
      data,
    ).lean();
    return {
      data: vehicleItems,
      version: QUERY_VERSION.v1,
    };
  }
}
