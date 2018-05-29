import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartCounterComponent } from './cart-counter/cart-counter.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CartCounterComponent],
  exports: [CartCounterComponent]
})
export class CartModule { }
