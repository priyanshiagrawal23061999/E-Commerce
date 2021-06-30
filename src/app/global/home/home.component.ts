import { Component, OnInit } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import * as json_data from './products.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data = json_data.products

  ELEMENT_DATA : any[] = [];

  displayedColumns: string[] = [
    'Name',
    'Description',
    'Price',
    'Author',
    'Type',
    'Image',
    'Category',
    'InCart'
  ];
  dataSource: any;
  id: number | undefined;
  prod: string[] = []

  constructor(
    private cartService: CartService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

    for (let i in this.data) {
      this.id = this.data[i].id;
      this.ELEMENT_DATA.push({
        Name: this.data[i].name,
        Description: this.data[i].description,
        Price: this.data[i].price,
        Author: this.data[i].author,
        Type: this.data[i].type,
        Image: this.data[i].img,
        Category: this.data[i].category,
        Incart: this.data[i].inCart,
        Id: this.data[i].id

      });
    }
    this.dataSource = this.ELEMENT_DATA;

  }

  cart(object: any){
    this.cartService.addToCart(object)
  
    this._snackBar.open('Item added to cart', 'OK', {
      duration: 2000,
    });
  }
}
