import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.scss']
})
export class ShowCartComponent implements OnInit {
  items: any;
  count: any;
  arr_item : any[] = [];
  total_price: any;

  constructor(
    private cartService: CartService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getCartItems()
    this.count = this.items.length;


    for (let i = 0; i < this.count; i++) { 
      for(let j = 0; j< this.items[i].length; j++) 
      this.arr_item.push(this.items[i][j])
    }

    this.total_price = this.cartService.showPrice(this.arr_item)
  }

  order(){
    this.route.navigateByUrl('/cart/order')
  }

}
