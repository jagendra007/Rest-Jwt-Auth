import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { RoleGuard } from './users/role.guard';
import { CONSTANTS } from './users/constants';



@Controller('app')
export class AppController {
 
constructor(private readonly authService: AuthService){}


  @Post('/login')
  @UseGuards(AuthGuard("local"))
  login(@Request()req): string {

   const token =  this.authService.generateToken(req.user);
    return ( token);
  }

  @Get('/developer')
  @UseGuards(AuthGuard("jwt"), new RoleGuard(CONSTANTS.ROLES.DEVELPOER))
  developer(@Request() req):string{
    return "Secret Data for Developer !!!" + JSON.stringify(req.user);
  }

  @Get('/tester')
  @UseGuards(AuthGuard("jwt"), new RoleGuard(CONSTANTS.ROLES.TESTER))
  tester(@Request() req):string{
    return "Secret Data for Tester !!!" + JSON.stringify(req.user);
  }
}
