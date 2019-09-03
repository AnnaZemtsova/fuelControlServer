import {Module} from "@nestjs/common";
import {VinService} from "./service/vin.service";
import {VinController} from "./controller/vin.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import { Vin } from './entity/vin.entity';
import { User } from '../users/entity/user.entity';



@Module({
  imports: [ TypeOrmModule.forFeature([Vin, User])],
  controllers: [VinController],
  providers: [VinService]
})
export class VinsModule {
}
