import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProuctListComponent } from './container/prouct-list/prouct-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ProuctListComponent]
})
export class ProductListingModule { }
