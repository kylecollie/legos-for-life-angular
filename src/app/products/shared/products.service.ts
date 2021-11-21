import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductDto } from './product.dto';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _http: HttpClient) {}

  getAll(): Observable<ProductDto[]> {
    return this._http.get<ProductDto[]>(environment.api + '/api/Product');
  }
}
