import { Injectable } from '@nestjs/common';
import { CreateDriverInput, UpdateDriverInput } from './entities/mutation';
import { MDriver } from './db/MDriver';

@Injectable()
export class DriverService {
  async create(data: CreateDriverInput) {
    return await new MDriver(data).save();
  }

  findAll() {
    return `This action returns all driver`;
  }

  findOne(id: number) {
    return `This action returns a #${id} driver`;
  }

  update(id: number, updateDriverInput: UpdateDriverInput) {
    return `This action updates a #${id} driver`;
  }

  remove(id: number) {
    return `This action removes a #${id} driver`;
  }
}
