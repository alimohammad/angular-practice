import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { productList, ProductListItem } from './../../models';

@Component({
  selector: 'app-prouct-list',
  templateUrl: './prouct-list.component.html',
  styleUrls: ['./prouct-list.component.css']
})
export class ProuctListComponent implements OnInit {
  products: ProductListItem[];
  constructor(private _router: Router) {
    this.products = productList;
  }

  ngOnInit() {
    console.log(this.products);
  }

  onClick(productId: number) {
    this._router.navigate(['product', 'detail', productId]);
  }
}
