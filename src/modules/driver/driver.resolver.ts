import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DriverService } from './driver.service';
import { Driver } from './entities/query/driver.entity';
import { CreateDriverInput } from './entities/mutation';
import { UpdateDriverInput } from './entities/mutation';

@Resolver(() => Driver)
export class DriverResolver {
  constructor(private readonly driverService: DriverService) {}

  // TODO: check here
  @Mutation(() => Driver, { name: 'createDriver' })
  createDriver(@Args('data') data: CreateDriverInput) {
    return this.driverService.create(data);
  }

  @Query(() => [Driver], { name: 'driver' })
  findAll() {
    return this.driverService.findAll();
  }

  @Query(() => Driver, { name: 'driver' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.driverService.findOne(id);
  }

  @Mutation(() => Driver)
  updateDriverDetails(
    @Args('updateDriverInput') updateDriverInput: UpdateDriverInput,
  ) {
    return this.driverService.update(updateDriverInput.id, updateDriverInput);
  }

  @Mutation(() => Driver)
  removeDriver(@Args('id', { type: () => Int }) id: number) {
    return this.driverService.remove(id);
  }
}
