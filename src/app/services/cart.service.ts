import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addToCart(object: any) {
    var prod = [];
    prod.push({
      Id: object.Id,
      Name: object.Name,
      Description: object.Description,
      Author: object.Author,
      Price: object.Price,
      Image: object.Image,
      Category: object.Category,
      Type: object.Type,
    });
    var stored = [];
    if (localStorage.getItem('cart') != null) {
      stored = JSON.parse(localStorage.getItem('cart') || '{}');
    }
    stored.push(prod);
    localStorage.setItem('cart', JSON.stringify(stored));

  }

  getCartItems() {
    var result = JSON.parse(localStorage.getItem('cart') || '{}');

    if(localStorage.getItem('cart')){
    var items = result.map((user: any) => user);
    
    return items;
    }
    else return 0
  }

  showPrice(arr_items: any){
    var price = 0;
    for (let i = 0; i < arr_items.length; i++) { 
      price = price + arr_items[i].Price 
    }
    return price
  }
}
