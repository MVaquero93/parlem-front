import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientTicketComponent } from './pages/client-ticket/client-ticket.component';
import { ClientDataComponent } from './components/client-data/client-data.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CustomerDataComponent } from './components/customer-data/customer-data.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientTicketComponent,
    ClientDataComponent,
    ProductListComponent,
    CustomerDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
