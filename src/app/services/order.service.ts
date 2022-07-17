import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { OrderModel } from '../models/ordes.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private BASE_URL: string = environment.base_url;

  constructor(private _http: HttpClient) { }

  public getOrders(): Observable<OrderModel[]> {
    return this._http.get<OrderModel[]>(`${this.BASE_URL}api/Order`);
  }

}
