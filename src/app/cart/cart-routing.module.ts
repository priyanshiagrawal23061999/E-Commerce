import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowCartComponent } from './show-cart/show-cart.component';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'showCart', component: ShowCartComponent
      },
      {
        path: 'order', component: OrderComponent
      }
    ] 
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  exports: [RouterModule]
})
export class CartRoutingModule { }
