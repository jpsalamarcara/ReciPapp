import { Product } from '../models/mProduct';

export class Transaction{
  id: number;
  origin: number;
  destiny: number;
  products: Product;
}
