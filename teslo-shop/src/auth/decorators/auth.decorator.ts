import { UseGuards, applyDecorators } from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';
import { RoleProtected } from './role-protected.decorator';
import { UserRoleGuard } from '../guards/user-role/user-role.guard';
import { ValidRoles } from '../interfaces';

export function Auth(...roles: ValidRoles[]) {
  //Sirve para aplicar varios decoradores a la vez, en este caso se aplican el decorador de RoleProtected y el de UseGuards, de esta forma se puede usar el decorador Auth() en lugar de tener que usar ambos decoradores por separado
  return applyDecorators(
    RoleProtected(...roles),
    UseGuards(AuthGuard('jwt'), UserRoleGuard),
  );
}
