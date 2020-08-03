import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerTicketComponent } from './customer-ticket.component';
import {CustomerDataComponent} from '../../components/customer-data/customer-data.component';
import {ProductListComponent} from '../../components/product-list/product-list.component';
import {RouterModule, Routes} from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';

const routes: Routes = [
  {path: ':customerId', component: CustomerTicketComponent},
]


@NgModule({
  declarations: [
    CustomerTicketComponent,
    CustomerDataComponent,
    ProductListComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatTableModule,
    MatCardModule,
  ]
})
export class CustomerTicketModule { }
