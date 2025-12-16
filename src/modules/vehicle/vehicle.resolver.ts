import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  VehicleResponseMutationData,
  VehicleResponseQueryData,
  VehiclesResponseQueryData,
} from './entities';
import { CreateVehicleInput, UpdateVehicleInput } from './entities/mutation';
import { Vehicle } from './entities/query';
import { VehicleService } from './vehicle.service';

@Resolver(() => Vehicle)
export class VehicleResolver {
  constructor(private readonly vehicleService: VehicleService) {}

  @Mutation(() => VehicleResponseMutationData)
  async createVehicle(@Args('data') data: CreateVehicleInput) {
    return await this.vehicleService.create(data);
  }

  @Query(() => VehiclesResponseQueryData, { name: 'vehicles' })
  async findVehicles() {
    return await this.vehicleService.findAll();
  }

  @Query(() => VehicleResponseQueryData, { name: 'vehicle' })
  async findVehicle(@Args('_id') _id: string) {
    return await this.vehicleService.find(_id);
  }

  @Mutation(() => VehicleResponseMutationData)
  async updateVehicle(
    @Args('_id') _id: string,
    @Args('data') data: UpdateVehicleInput,
  ) {
    return await this.vehicleService.update(_id, data);
  }
}
