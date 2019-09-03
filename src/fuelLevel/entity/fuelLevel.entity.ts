
import {
  Column,
  Entity, ManyToOne,
  ObjectID, ObjectIdColumn,
} from 'typeorm';

import { Vin } from '../../vins/entity/vin.entity';

@Entity('fuelLevel')
export class FuelLevel {

  @ObjectIdColumn()
  _id: ObjectID;

  @ManyToOne(type => Vin, vin => vin._id, { nullable: false })
  vin: Vin;

  @Column()
  fuelLevelArray: number[];

}
