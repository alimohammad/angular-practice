import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProuctListComponent } from './product-listing/container/prouct-list/prouct-list.component';
import { ProductDetailComponent } from './product-detail/container/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'list', pathMatch: 'full'
  },
  {
    path: 'list',
    component: ProuctListComponent
  },
  {
    path: 'detail/:productId',
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
