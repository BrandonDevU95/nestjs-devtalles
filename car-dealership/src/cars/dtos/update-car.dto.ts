import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsOptional()
  readonly make?: string;

  @IsString()
  @IsOptional()
  readonly model?: string;

  @IsNumber()
  @IsOptional()
  readonly year?: number;
}
