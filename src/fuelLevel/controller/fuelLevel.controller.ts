import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../auth/guard/auth.guard';
import { FuelLevelDto } from '../dto/fuelLevel.dto';
import { FuelLevelService } from '../service/fuelLevel.service';


@Controller('fuelLevel')
export class FuelLevelController {
  constructor(private fuelLLevelService: FuelLevelService){}

  @Get('/:idVin')
  @UseGuards(AuthGuard)
  async getFuelLevel(@Param('idVin') idVin: string){
    return this.fuelLLevelService.getList(idVin);
  }

  @Post()
  @UseGuards(AuthGuard)
  async addFuelLevel(@Body() fuelLevelDto: FuelLevelDto){
    return this.fuelLLevelService.addFuelLevel(fuelLevelDto);
  }

}
