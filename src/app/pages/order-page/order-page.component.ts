import { Component, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/models/ordes.model';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  public orders: OrderModel[] = [];

  constructor(private _orderService: OrderService) { }

  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData(): void {
    this.getOrders();
  }

  private getOrders(): void {
    this._orderService.getOrders()
    .subscribe(response => {
      this.orders = response;
    });
  }


}
