import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateFuelInput, UpdateFuelInput } from './entities/mutation';
import { FuelRecord } from './entities/query';
import { FuelService } from './fuel.service';
import {
  FuelRecordResponseQueryData,
  FuelRecordsResponseQueryData,
  FuelRecordResponseMutationData,
} from './entities';

@Resolver(() => FuelRecord)
export class FuelResolver {
  constructor(private readonly fuelService: FuelService) {}

  @Mutation(() => FuelRecordResponseMutationData)
  createFuel(@Args('data') data: CreateFuelInput) {
    return this.fuelService.create(data);
  }

  @Query(() => FuelRecordsResponseQueryData, { name: 'fuelRecords' })
  findAll() {
    return this.fuelService.findAll();
  }

  @Query(() => FuelRecordResponseQueryData, { name: 'fuelRecord' })
  findOne(@Args('_id', { type: () => String }) _id: string) {
    return this.fuelService.findOne(_id);
  }

  @Mutation(() => FuelRecordResponseMutationData)
  updateFuel(
    @Args('_id') _id: string,
    @Args('updateFuelInput') updateFuelInput: UpdateFuelInput,
  ) {
    return this.fuelService.update(_id, updateFuelInput);
  }

  @Mutation(() => FuelRecordResponseMutationData)
  removeFuel(@Args('_id', { type: () => Int }) _id: string) {
    return this.fuelService.remove(_id);
  }
}
