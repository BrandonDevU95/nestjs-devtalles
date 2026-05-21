import { Controller, Get } from '@nestjs/common';

import { Auth } from 'src/auth/decorators';
import { SeedService } from './seed.service';
import { ValidRoles } from 'src/auth/interfaces';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  @Auth(ValidRoles.superUser)
  executeSeeds() {
    return this.seedService.runSeed();
  }
}
