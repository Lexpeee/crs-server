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
  createDriver(@Args('data') data: CreateDriverInput) {
    return this.driverService.create(data);
  }

  @Query(() => DriversResponseQueryData, { name: 'drivers' })
  async findAll() {
    return await this.driverService.findAll();
  }

  @Query(() => DriverResponseQueryData, { name: 'driver' })
  findOne(@Args('_id', { type: () => String }) _id: string) {
    return this.driverService.findOne(_id);
  }

  @Mutation(() => DriverResponseMutationData)
  updateDriver(
    @Args('_id') _id: string,
    @Args('data') updateDriverInput: UpdateDriverInput,
  ) {
    return this.driverService.update(_id, updateDriverInput);
  }
}
