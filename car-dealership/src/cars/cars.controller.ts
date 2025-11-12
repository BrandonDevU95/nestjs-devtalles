import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.findById(id);
  }

  @Post()
  createCar(@Body() body: any) {
    return {
      message: `Create car ${body.make} ${body.model} - to be implemented`,
    };
  }

  @Patch(':id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return { message: `Update car ${id} endpoint - to be implemented` };
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return { message: `Delete car ${id} endpoint - to be implemented` };
  }
}
