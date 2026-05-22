import { Controller, Get } from '@nestjs/common';

import { Auth } from 'src/auth/decorators';
import { GetUser } from 'src/auth/decorators';
import { User } from 'src/auth/entities/user.entity';
import { SeedService } from './seed.service';
import { ValidRoles } from 'src/auth/interfaces';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  @Auth(ValidRoles.superUser)
  executeSeeds(@GetUser() user: User) {
    return this.seedService.runSeed(user);
  }
}
