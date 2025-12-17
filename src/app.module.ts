import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriverModule } from './modules/driver/driver.module';
import { VehicleModule } from './modules/vehicle/vehicle.module';
import { RentModule } from './modules/rent/rent.module';
import { RentLogsModule } from './modules/audit/rent.logs/rent.logs.module';
import { FuelModule } from './modules/reports/fuel/fuel.module';
import { VehicleItemsModule } from './modules/reports/vehicle-items/vehicle-items.module';
import { RepairModule } from './modules/reports/repair/repair.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      graphiql: true,
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: false,
      buildSchemaOptions: {
        dateScalarMode: 'timestamp',
      },
    }),
    DriverModule,
    VehicleModule,
    RentModule,
    RentLogsModule,
    FuelModule,
    VehicleItemsModule,
    RepairModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
