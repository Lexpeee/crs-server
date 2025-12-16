import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreateVehicleItemsInput,
  UpdateVehicleItemsInput,
} from './entities/mutation';
import { VehicleItemsRecord } from './entities/query';
import { VehicleItemsService } from './vehicle-items.service';

@Resolver()
export class VehicleItemsResolver {
  constructor(private readonly vehicleItemsService: VehicleItemsService) {}

  @Query(() => [VehicleItemsRecord])
  findAll() {
    return this.vehicleItemsService.findAll();
  }

  @Query(() => VehicleItemsRecord)
  findOne(@Args('_id', { type: () => String }) _id: string) {
    return this.vehicleItemsService.findOne(_id);
  }

  @Mutation(() => VehicleItemsRecord)
  createVehicleItem(@Args('data') data: CreateVehicleItemsInput) {
    return this.vehicleItemsService.create(data);
  }

  @Mutation(() => VehicleItemsRecord)
  updateVehicleItem(
    @Args('_id') _id: string,
    @Args('data') data: UpdateVehicleItemsInput,
  ) {
    return this.vehicleItemsService.update(_id, data);
  }
}
