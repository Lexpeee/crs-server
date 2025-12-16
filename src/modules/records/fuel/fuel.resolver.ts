import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateFuelInput, UpdateFuelInput } from './entities/mutation';
import { Fuel } from './entities/query';
import { FuelService } from './fuel.service';

@Resolver(() => Fuel)
export class FuelResolver {
  constructor(private readonly fuelService: FuelService) {}

  @Mutation(() => Fuel)
  createFuel(@Args('data') data: CreateFuelInput) {
    return this.fuelService.create(data);
  }

  @Query(() => [Fuel], { name: 'fuelRecords' })
  findAll() {
    return this.fuelService.findAll();
  }

  @Query(() => Fuel, { name: 'fuelRecord' })
  findOne(@Args('_id', { type: () => String }) _id: string) {
    return this.fuelService.findOne(_id);
  }

  @Mutation(() => Fuel)
  updateFuel(
    @Args('_id') _id: string,
    @Args('updateFuelInput') updateFuelInput: UpdateFuelInput,
  ) {
    return this.fuelService.update(_id, updateFuelInput);
  }

  @Mutation(() => Fuel)
  removeFuel(@Args('_id', { type: () => Int }) _id: string) {
    return this.fuelService.remove(_id);
  }
}
