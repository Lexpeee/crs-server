import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateRentInput, UpdateRentInput } from './entities/mutation';
import { Rent } from './entities/query';
import { RentService } from './rent.service';

@Resolver(() => Rent)
export class RentResolver {
  constructor(private readonly rentService: RentService) {}

  @Mutation(() => Rent)
  createRent(@Args('createRentInput') createRentInput: CreateRentInput) {
    return this.rentService.create(createRentInput);
  }

  @Query(() => [Rent], { name: 'rents' })
  findAll() {
    return this.rentService.findAll();
  }

  @Query(() => Rent, { name: 'rent' })
  findOne(@Args('_id', { type: () => String }) _id: string) {
    return this.rentService.findOne(_id);
  }

  @Mutation(() => Rent)
  updateRent(
    @Args('_id') _id: string,
    @Args('updateRentInput') updateRentInput: UpdateRentInput,
  ) {
    return this.rentService.update(_id, updateRentInput);
  }
}
