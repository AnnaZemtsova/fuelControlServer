import {Repository} from "typeorm";
import { Vin } from '../entity/vin.entity';
import {EntityRepository} from "typeorm";

@EntityRepository(Vin)
export class VinRepository extends Repository<Vin>{
    
}
