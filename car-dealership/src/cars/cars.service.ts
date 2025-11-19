import { Injectable, NotFoundException } from '@nestjs/common';

import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    { id: uuid(), make: 'Toyota', model: 'Corolla', year: 2020 },
    { id: uuid(), make: 'Honda', model: 'Civic', year: 2019 },
    { id: uuid(), make: 'Ford', model: 'Mustang', year: 2021 },
    { id: uuid(), make: 'Chevrolet', model: 'Camaro', year: 2018 },
    { id: uuid(), make: 'Tesla', model: 'Model 3', year: 2022 },
  ];

  public findAll() {
    return this.cars;
  }

  public findById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) {
      throw new NotFoundException(`Car with ID ${id} not found`);
    }

    return car;
  }

  public create(createCarDto: CreateCarDto) {
    const newCar: Car = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(newCar);
    return newCar;
  }

  public update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findById(id);
    this.cars = this.cars.map((c) => {
      if (c.id === id) {
        carDB = { ...c, ...updateCarDto, id };
        return carDB;
      }
      return c;
    });
    return carDB;
  }
}
