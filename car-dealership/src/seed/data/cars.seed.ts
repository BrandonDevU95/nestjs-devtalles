import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
  },
  {
    id: uuid(),
    make: 'Honda',
    model: 'Civic',
    year: 2019,
  },
  {
    id: uuid(),
    make: 'Ford',
    model: 'Mustang',
    year: 2021,
  },
  {
    id: uuid(),
    make: 'Chevrolet',
    model: 'Malibu',
    year: 2020,
  },
  {
    id: uuid(),
    make: 'Nissan',
    model: 'Altima',
    year: 2020,
  },
  {
    id: uuid(),
    make: 'Hyundai',
    model: 'Elantra',
    year: 2020,
  },
  {
    id: uuid(),
    make: 'Kia',
    model: 'Forte',
    year: 2020,
  },
  {
    id: uuid(),
    make: 'Mazda',
    model: '3',
    year: 2020,
  },
  {
    id: uuid(),
    make: 'Subaru',
    model: 'Impreza',
    year: 2020,
  },
  {
    id: uuid(),
    make: 'Volkswagen',
    model: 'Jetta',
    year: 2020,
  },
];
