import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DriverService } from './driver.service';
import { CreateDriverInput, UpdateDriverInput } from './entities/mutation';
import { Driver } from './entities/query';

@Resolver(() => Driver)
export class DriverResolver {
  constructor(private readonly driverService: DriverService) {}

  @Mutation(() => Driver)
  createDriver(@Args('data') data: CreateDriverInput) {
    return this.driverService.create(data);
  }

  @Query(() => [Driver], { name: 'drivers' })
  findAll() {
    return this.driverService.findAll();
  }

  @Query(() => Driver, { name: 'driver' })
  findOne(@Args('_id', { type: () => String }) _id: string) {
    return this.driverService.findOne(_id);
  }

  @Mutation(() => Driver)
  updateDriver(
    @Args('_id') _id: string,
    @Args('data') updateDriverInput: UpdateDriverInput,
  ) {
    return this.driverService.update(_id, updateDriverInput);
  }
}
