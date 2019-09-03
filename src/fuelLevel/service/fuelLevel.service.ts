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
import { FuelLevel } from '../entity/fuelLevel.entity';
import { FuelLevelRepository } from '../repository/fuelLevel.repository';
import { FuelLevelDto } from '../dto/fuelLevel.dto';
import { Vin } from '../../vins/entity/vin.entity';
import { VinRepository } from '../../vins/repository/vin.repository';


const mongoose  = require('mongoose');

@Injectable()
export class FuelLevelService {

  constructor(@InjectRepository(FuelLevel) private readonly fuelLevelRepository: FuelLevelRepository,
              @InjectRepository(Vin) private readonly vinRepository: VinRepository) {}

  async addFuelLevel(fuelLevelDto: FuelLevelDto){
    const fuelLevel  = new FuelLevel();
    fuelLevel.vin = await this.vinRepository.findOne(fuelLevelDto.vinId);
    fuelLevel.fuelLevelArray = fuelLevelDto.fuelLevelArray;
    try{
      await this.vinRepository.insert(fuelLevel);
      return  fuelLevel;
    }catch(e){
      return null;
    }
  }


  async getList(idVin: string){
    try{
      return await this.fuelLevelRepository.find({where: `idVin = '${idVin}'`});
    }catch(e){
      return null;
    }
  }
}
