import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
  cartCounterChanged: Subject<number> = new Subject<number>();
  constructor() { }

  addToCart() {
    this.cartCounterChanged.next(2);
  }
}
