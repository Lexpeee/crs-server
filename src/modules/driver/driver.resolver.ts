import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DriverService } from './driver.service';
import {
  DriverResponseMutationData,
  DriverResponseQueryData,
  DriversResponseQueryData,
} from './entities';
import { CreateDriverInput, UpdateDriverInput } from './entities/mutation';
import { Driver } from './entities/query';

@Resolver(() => Driver)
export class DriverResolver {
  constructor(private readonly driverService: DriverService) {}

  @Mutation(() => DriverResponseMutationData)
  async createDriver(@Args('data') data: CreateDriverInput) {
    return await this.driverService.create(data);
  }

  @Query(() => DriversResponseQueryData, { name: 'drivers' })
  async findAll() {
    return await this.driverService.findAll();
  }

  @Query(() => DriverResponseQueryData, { name: 'driver' })
  async findOne(@Args('_id', { type: () => String }) _id: string) {
    return await this.driverService.findOne(_id);
  }

  @Mutation(() => DriverResponseMutationData)
  async updateDriver(
    @Args('_id') _id: string,
    @Args('data') updateDriverInput: UpdateDriverInput,
  ) {
    return await this.driverService.update(_id, updateDriverInput);
  }
}
