import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.css']
})
export class CustomerDataComponent implements OnInit {
  @Input() customer

  constructor() { }

  ngOnInit(): void {
  }

}
