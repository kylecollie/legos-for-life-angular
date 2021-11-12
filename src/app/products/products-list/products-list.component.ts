import { Component, OnInit } from '@angular/core';
import { ProductDto } from '../shared/product.dto';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-inno-tech-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: ProductDto[] | undefined;
  constructor(private _productService: ProductsService) {}

  ngOnInit(): void {
    this._productService.getAll().subscribe(products => {
      this.products = products;
    });
  }
}
