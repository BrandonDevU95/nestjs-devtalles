import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

import { META_ROLES } from 'src/auth/decorators/role-protected.decorator';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { User } from 'src/auth/entities/user.entity';

@Injectable()
export class UserRoleGuard implements CanActivate {
  //El reflector es una clase de NestJS que nos permite acceder a los metadatos de los decoradores
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const validRoles: string[] = this.reflector.get<string[]>(
      META_ROLES,
      context.getHandler(),
    );

    const request = context.switchToHttp().getRequest();
    const user = request.user as User;

    return validRoles.some((role) => user.roles.includes(role));
  }
}
