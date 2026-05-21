import {
  Body,
  Controller,
  Get,
  Post,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from './dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from './entities/user.entity';
import { Auth, GetUser, RoleProtected, RowHeaders } from './decorators';
import { UserRoleGuard } from './guards/user-role/user-role.guard';
import { ValidRoles } from './interfaces';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Get('private')
  //Al usar 'jwt' se fuerza explicitamente a usar la estrategia de jwt
  @UseGuards(AuthGuard('jwt'))
  testingPrivateRoute(
    @GetUser() user: User,
    @GetUser('email') userEmail: string,
    @RowHeaders() headers: string[],
  ) {
    return {
      ok: true,
      message: 'This is a private route',
      user,
      userEmail,
      headers,
    };
  }

  @Get('private2')
  //Con este decorador se pueden establecer metadatos personalizados, en este caso se establece un metadato llamado 'roles' con un array de roles válidos
  @SetMetadata('roles', ['admin', 'super-user'])
  //Al usar AuthGuard() sin argumentos se usará la estrategia por defecto, que en este caso es 'jwt'
  @UseGuards(AuthGuard(), UserRoleGuard)
  testingPrivateRoute2(
    @GetUser() user: User,
    @GetUser('email') userEmail: string,
    @RowHeaders() headers: string[],
  ) {
    return {
      ok: true,
      message: 'This is another private route',
      user,
      userEmail,
      headers,
    };
  }

  @Get('private3')
  //Con este decorador se pueden establecer metadatos personalizados, en este caso se establece un metadato llamado 'roles' con un array de roles válidos, usando el enum ValidRoles
  @RoleProtected(ValidRoles.superUser)
  @UseGuards(AuthGuard(), UserRoleGuard)
  testingPrivateRoute3(
    @GetUser() user: User,
    @GetUser('email') userEmail: string,
    @RowHeaders() headers: string[],
  ) {
    return {
      ok: true,
      message: 'This is another private route',
      user,
      userEmail,
      headers,
    };
  }

  @Get('private4')
  //Implementa el decorador Auth() que combina el decorador de RoleProtected y el de UseGuards, de esta forma se puede usar el decorador Auth() en lugar de tener que usar ambos decoradores por separado
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  testingPrivateRoute4(@GetUser() user: User) {
    return {
      ok: true,
      message: 'This is another private route',
      user,
    };
  }
}
