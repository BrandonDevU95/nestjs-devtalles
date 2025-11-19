import { Brand } from '../../brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Toyota',
    createdAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'Honda',
    createdAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'Ford',
    createdAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'Chevrolet',
    createdAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'Nissan',
    createdAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'Hyundai',
    createdAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'Kia',
    createdAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'Mazda',
    createdAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'Subaru',
    createdAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'Volkswagen',
    createdAt: Date.now(),
  },
];
