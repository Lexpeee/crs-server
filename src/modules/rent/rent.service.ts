import { Injectable } from '@nestjs/common';
import { CreateRentInput, UpdateRentInput } from './entities/mutation';
import { MRent } from './db/MRent';

@Injectable()
export class RentService {
  async create(data: CreateRentInput) {
    return await new MRent(data).save();
  }

  async findAll() {
    return await MRent.find().sort({ createdAt: -1 });
  }

  async findOne(_id: string) {
    return await MRent.findOne({ _id });
  }

  async update(_id: string, data: UpdateRentInput) {
    return await MRent.findOneAndUpdate({ _id }, { ...data }, { new: true });
  }
}
