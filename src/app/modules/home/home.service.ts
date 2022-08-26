import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  public fetchProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('localhost:3004/products');
  }
}
