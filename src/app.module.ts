import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { User } from './users/entity/user.entity';
import { AuthController } from './auth/controller/auth.controller';
import { AuthService } from './auth/service/auth.service';
import { VinController } from './vins/controller/vin.controller';
import { VinService } from './vins/service/vin.service';
import { UserService } from './users/service/user.service';
import { UserController } from './users/controller/user.controller';
import { VinsModule } from './vins/vins.module';
import { Vin } from './vins/entity/vin.entity';

@Module({
  imports: [UserModule, AuthModule, VinsModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'vins',
      entities: [
        User,
        Vin
      ],
      synchronize: true,
    }),],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
