import { Injectable } from '@nestjs/common';
import { ProductsService } from './../products/products.service';
import { User } from 'src/auth/entities/user.entity';
import { initialData } from './data/seed-data';

@Injectable()
export class SeedService {
  constructor(private readonly productsService: ProductsService) {}

  async runSeed(user: User) {
    await this.seedProducts(user);
    return 'SEED EXECUTED';
  }

  private async seedProducts(user: User) {
    await this.productsService.deleteAllProducts();
    const products = initialData.products;

    const insertPromises: Promise<any>[] = [];

    products.forEach((product) => {
      insertPromises.push(this.productsService.create(product, user));
    });
    await Promise.all(insertPromises);
    return true;
  }
}
