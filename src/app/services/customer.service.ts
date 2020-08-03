import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'api/customer/'

  constructor(private http: HttpClient) { }

  getProductsById(customer): Observable<any> {
    return this.http.get(this.apiUrl + customer);
  }
}
