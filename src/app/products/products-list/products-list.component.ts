import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-inno-tech-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  constructor(private _productService: ProductsService) {}

  ngOnInit(): void {}
}
