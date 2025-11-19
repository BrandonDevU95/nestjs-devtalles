import { IsNumber, IsString } from 'class-validator';

export class CreateCarDto {
  @IsString()
  readonly make: string;

  @IsString()
  readonly model: string;

  @IsNumber()
  readonly year: number;
}
