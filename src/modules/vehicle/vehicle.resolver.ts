import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { VehicleService } from './vehicle.service';
import { Vehicle } from './entities/query';
import { CreateVehicleInput, UpdateVehicleInput } from './entities/mutation';

@Resolver(() => Vehicle)
export class VehicleResolver {
  constructor(private readonly vehicleService: VehicleService) {}

  @Mutation(() => Vehicle)
  createVehicle(@Args('data') data: CreateVehicleInput) {
    return this.vehicleService.create(data);
  }

  @Query(() => [Vehicle], { name: 'vehicles' })
  findVehicles() {
    return this.vehicleService.findAll();
  }

  @Query(() => Vehicle, { name: 'vehicle' })
  findVehicle(@Args('_id') _id: string) {
    return this.vehicleService.find(_id);
  }

  @Mutation(() => Vehicle)
  updateVehicle(
    @Args('_id') _id: string,
    @Args('data') data: UpdateVehicleInput,
  ) {
    return this.vehicleService.update(_id, data);
  }
}
