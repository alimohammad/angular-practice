import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListingModule } from './product-listing/product-listing.module';
import { ProductDetailModule } from './product-detail/product-detail.module';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    ProductListingModule,
    ProductDetailModule
  ],
  declarations: []
})
export class ProductModule { }
