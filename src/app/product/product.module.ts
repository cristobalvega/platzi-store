import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from '../home/componentes/banner/banner.component';
import { ProductComponent } from './components/product/product.component';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';


@NgModule({
  declarations: [
    // BannerComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule,
  ]
})
export class ProductModule { }
