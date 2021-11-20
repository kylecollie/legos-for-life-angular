import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDto } from '../shared/product.dto';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-inno-tech-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products$: Observable<ProductDto[]> | undefined;

  constructor(private _productService: ProductsService) {}

  ngOnInit(): void {
    this.products$ = this._productService.getAll();
  }
}
