import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  RentResponseMutationData,
  RentResponseQueryData,
  RentsResponseQueryData,
} from './entities';
import { CreateRentInput, UpdateRentInput } from './entities/mutation';
import { Rent } from './entities/query';
import { RentService } from './rent.service';

@Resolver(() => Rent)
export class RentResolver {
  constructor(private readonly rentService: RentService) {}

  @Mutation(() => RentResponseMutationData)
  async createRent(@Args('createRentInput') createRentInput: CreateRentInput) {
    return await this.rentService.create(createRentInput);
  }

  @Query(() => RentsResponseQueryData, { name: 'rents' })
  async findAll() {
    return await this.rentService.findAll();
  }

  @Query(() => RentResponseQueryData, { name: 'rent' })
  async findOne(@Args('_id', { type: () => String }) _id: string) {
    return await this.rentService.findOne(_id);
  }

  @Mutation(() => RentResponseMutationData)
  async updateRent(
    @Args('_id') _id: string,
    @Args('updateRentInput') updateRentInput: UpdateRentInput,
  ) {
    return await this.rentService.update(_id, updateRentInput);
  }
}
