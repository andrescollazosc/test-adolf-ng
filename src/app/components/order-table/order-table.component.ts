import { Component, Input, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/models/ordes.model';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnInit {

  @Input() orderItems: OrderModel[] = [];

  constructor() { }

  ngOnInit(): void {
    if (this.orderItems.length == 0) {
      throw new Error('Order is required');
    }
  }

}
