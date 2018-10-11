import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {

  constructor(
    private apiService:ApiService
  ) { }

  getProducts(){
    return this.apiService.get('/products')
      .pipe(map(data=>data.products));
  }
}