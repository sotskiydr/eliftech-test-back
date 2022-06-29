import { Injectable } from '@nestjs/common';
import * as data from '../data/shops.json'

@Injectable()
export class ProductsService {
  getCategories() {
    return data.shops;
  }
}
