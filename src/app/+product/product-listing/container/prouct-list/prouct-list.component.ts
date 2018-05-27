import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prouct-list',
  templateUrl: './prouct-list.component.html',
  styleUrls: ['./prouct-list.component.css']
})
export class ProuctListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('init');
  }

}
