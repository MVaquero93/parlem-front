import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import {ActivatedRoute} from '@angular/router';
import {take, tap} from 'rxjs/operators';

@Component({
  selector: 'app-customer-ticket',
  templateUrl: './customer-ticket.component.html',
  styleUrls: ['./customer-ticket.component.css']
})
export class CustomerTicketComponent implements OnInit {

  customer: any

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.customerService.getProductsById(this.route.snapshot.params.customerId)
      .pipe(take(1))
      .subscribe((customerData) => this.customer = customerData);
  }

}
