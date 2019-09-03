import { Body, Controller, Header, Post } from '@nestjs/common';
import {UserService} from "../service/user.service";
import {UserDto} from "../dto/user.dto";
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';


@Controller('users')
export class UserController {
    constructor(private userService: UserService){}

    @Post('/signin')
    async getUser(@Body() userDto: UserDto){
        return this.userService.getUser(userDto);
    }


    @Post('/signup')
    async createUser(@Body() user: UserDto){
        return this.userService.createUser(user);
    }
}
