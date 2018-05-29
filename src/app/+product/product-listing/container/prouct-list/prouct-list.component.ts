import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { productList, ProductListItem } from './../../models';
import { AddToCartService } from './../../../../shared/services/add-to-cart.service';

@Component({
  selector: 'app-prouct-list',
  templateUrl: './prouct-list.component.html',
  styleUrls: ['./prouct-list.component.css']
})
export class ProuctListComponent implements OnInit {
  products: ProductListItem[];
  constructor(private _router: Router, private _cartService: AddToCartService) {
    this.products = productList;
  }

  ngOnInit() {
  }

  addToCart() {
    alert('from component');
    this._cartService.addToCart();
  }
}
