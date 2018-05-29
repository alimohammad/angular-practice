import { ActivatedRoute } from '@angular/router';
import { ProductListItem, productList } from './../../../product-listing/models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private _productId: number;
  product: ProductListItem;
  constructor(private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this._route.params.subscribe((params) => {
      this._productId = +params['productId'];
      this.product = productList.filter((s) => s.id === this._productId)[0];
    });
  }
}
