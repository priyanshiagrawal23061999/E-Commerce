import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  placeOrder(value: any){
    var order = []
    order.push(value)
    var stored = []
    stored = JSON.parse(localStorage.getItem('cart') || '{}');
    
    order.push(stored)

    localStorage.setItem('order', JSON.stringify(order))
    localStorage.removeItem('cart')
  }
}
