import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() customer

  constructor() { }

  displayedColumns: string[] = ['name', 'type', 'terminal', 'soldAt'];

  ngOnInit(): void {
  }

}
