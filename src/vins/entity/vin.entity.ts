
import {
    Column,
    Entity, ManyToOne,
    ObjectID, ObjectIdColumn,
} from 'typeorm';

import { User } from '../../users/entity/user.entity';

@Entity('vin')
export class Vin {

    @ObjectIdColumn()
    _id: ObjectID;

    @ManyToOne(type => User, user => user._id, { nullable: false })
    user: User;

    @Column()
    vinNumber: string;


}
