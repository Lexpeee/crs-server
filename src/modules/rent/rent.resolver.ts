import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RentService } from './rent.service';
import { Rent } from './entities/query';
import { CreateRentInput, UpdateRentInput } from './entities/mutation';

@Resolver(() => Rent)
export class RentResolver {
  constructor(private readonly rentService: RentService) {}

  @Mutation(() => Rent)
  createRent(@Args('createRentInput') createRentInput: CreateRentInput) {
    return this.rentService.create(createRentInput);
  }

  @Query(() => [Rent], { name: 'rent' })
  findAll() {
    return this.rentService.findAll();
  }

  @Query(() => Rent, { name: 'rent' })
  findOne(@Args('_id', { type: () => Int }) _id: string) {
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
