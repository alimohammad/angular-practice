import { AddToCartService } from './../../shared/services/add-to-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-counter',
  templateUrl: './cart-counter.component.html',
  styleUrls: ['./cart-counter.component.css']
})
export class CartCounterComponent implements OnInit {
  numberOfItemsInCart = 0;
  constructor(private _cartService: AddToCartService) { }

  ngOnInit() {
    this._cartService.cartCounterChanged.subscribe((count) => {
      alert(count);
      this.numberOfItemsInCart = this.numberOfItemsInCart + count;
    });
  }
}
