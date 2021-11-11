import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  declarations: [ProductsListComponent],
  imports: [CommonModule, ProductsRoutingModule, HttpClientModule],
})
export class ProductsModule {}
