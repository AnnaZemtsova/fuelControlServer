import {
    BadRequestException, Body, Delete,
    Get,
    Inject,
    Injectable,
    InternalServerErrorException,
    Param, Post, Put,
    UseGuards,
} from '@nestjs/common';

import * as jwt from 'jsonwebtoken';
import {InjectRepository} from "@nestjs/typeorm";
import {VinRepository} from "../repository/vin.repository";
import { common } from '../../config/config';
import { Vin } from '../entity/vin.entity';
import { AuthGuard } from '../../auth/guard/auth.guard';
import { VinDto } from '../dto/vin.dto';
import { User } from '../../users/entity/user.entity';
import { UserRepository } from '../../users/repository/user.repository';
import { Equal, ObjectID } from 'typeorm';


const mongoose  = require('mongoose');

@Injectable()
export class VinService {

    constructor(@InjectRepository(Vin) private readonly vinRepository: VinRepository,
                @InjectRepository(User) private readonly userRepository: UserRepository) {}

    async addVin(vinDto: VinDto){
        const vin = new Vin();
        vin.user = await this.userRepository.findOne(vinDto.idUser);
        vin.vinNumber = vinDto.vinNumber;
        try{
            await this.vinRepository.insert(vin);
            return  vin;
        }catch(e){
            return null;
        }
    }

    async updateVin(vinDto: VinDto): Promise<Vin>{
        const vin = new Vin();
        vin.user = await this.userRepository.findOne({where: `_id = '${vinDto.idUser}'`});
        vin.vinNumber = vinDto.vinNumber;
        console.log(vin);
        try{
            await this.vinRepository.update({_id: vinDto._id}, vin);
            return await this.vinRepository.findOne({where: `_id = '${vinDto._id}'`});
        }catch(e){
            throw new InternalServerErrorException('Can`t update vin');
        }
    }

    async deleteVin(id: any){
        try{
            let vin = await this.vinRepository.findOne({where: `_id = '${id}'`});
            let idVin = vin._id;
            await this.vinRepository.delete(id);
            return idVin;
        }catch(e){
            throw new InternalServerErrorException('Can`t delete vin');
        }
    }


    async getList(idUser: string){
        try{
            return await this.vinRepository.find({where: `idUser = '${idUser}'`});
        }catch(e){
            return null;
        }
    }
}
