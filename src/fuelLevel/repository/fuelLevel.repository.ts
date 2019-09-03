import {Repository} from "typeorm";
import {EntityRepository} from "typeorm";
import { FuelLevel } from '../entity/fuelLevel.entity';

@EntityRepository(FuelLevel)
export class FuelLevelRepository extends Repository<FuelLevel>{

}
