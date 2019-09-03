import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { User } from '../users/entity/user.entity';
import { Vin } from '../vins/entity/vin.entity';
import { FuelLevel } from './entity/fuelLevel.entity';
import { FuelLevelController } from './controller/fuelLevel.controller';
import { FuelLevelService } from './service/fuelLevel.service';



@Module({
  imports: [ TypeOrmModule.forFeature([Vin, FuelLevel])],
  controllers: [FuelLevelController],
  providers: [FuelLevelService]
})
export class FuelLevelModule {
}
