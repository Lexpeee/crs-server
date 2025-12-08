import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriverModule } from './modules/driver/driver.module';
import { VehicleModule } from './modules/vehicle/vehicle.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      graphiql: true,
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: false,
    }),
    DriverModule,
    VehicleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
