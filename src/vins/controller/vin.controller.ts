import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../auth/guard/auth.guard';
import { VinService } from '../service/vin.service';
import { VinDto } from '../dto/vin.dto';


@Controller('vins')
export class VinController {
    constructor(private vinService: VinService){}

    @Get('/:idUser')
    @UseGuards(AuthGuard)
    async getVins(@Param('idUser') idUser: string){
        return this.vinService.getList(idUser);
    }

    @Post()
    @UseGuards(AuthGuard)
    async addVin(@Body() vinDto: VinDto){
        return this.vinService.addVin(vinDto);
    }

    @Put()
    @UseGuards(AuthGuard)
    async updateVin(@Body() vinDto: VinDto){
        return this.vinService.updateVin(vinDto);
    }
    @Delete('/:id')
    @UseGuards(AuthGuard)
    async deleteVin(@Param() id: string){
        return this.vinService.deleteVin(id);
    }
}
