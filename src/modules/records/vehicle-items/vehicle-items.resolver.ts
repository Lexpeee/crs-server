import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  VehicleItemsRecordResponseMutationData,
  VehicleItemsRecordResponseQueryData,
  VehicleItemsRecordsResponseQueryData,
} from './entities';
import {
  CreateVehicleItemsInput,
  UpdateVehicleItemsInput,
} from './entities/mutation';
import { VehicleItemsService } from './vehicle-items.service';

@Resolver()
export class VehicleItemsResolver {
  constructor(private readonly vehicleItemsService: VehicleItemsService) {}

  @Query(() => VehicleItemsRecordsResponseQueryData)
  findAll() {
    return this.vehicleItemsService.findAll();
  }

  @Query(() => VehicleItemsRecordResponseQueryData)
  findOne(@Args('_id', { type: () => String }) _id: string) {
    return this.vehicleItemsService.findOne(_id);
  }

  @Mutation(() => VehicleItemsRecordResponseMutationData)
  createVehicleItem(@Args('data') data: CreateVehicleItemsInput) {
    return this.vehicleItemsService.create(data);
  }

  @Mutation(() => VehicleItemsRecordResponseMutationData)
  updateVehicleItem(
    @Args('_id') _id: string,
    @Args('data') data: UpdateVehicleItemsInput,
  ) {
    return this.vehicleItemsService.update(_id, data);
  }
}
