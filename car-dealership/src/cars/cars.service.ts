import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    { id: 0, make: 'Toyota', model: 'Corolla', year: 2020 },
    { id: 1, make: 'Honda', model: 'Civic', year: 2019 },
    { id: 2, make: 'Ford', model: 'Mustang', year: 2021 },
    { id: 3, make: 'Chevrolet', model: 'Camaro', year: 2018 },
    { id: 4, make: 'Tesla', model: 'Model 3', year: 2022 },
  ];

  public findAll() {
    return this.cars;
  }

  public findById(id: number) {
    return this.cars.find((car) => car.id === id);
  }
}
