import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  OrderForm = this.fb.group({
    Name: [null, Validators.required],
    MobNumber: [null, Validators.required],
    Address: [null, Validators.required],
    Email: [null, Validators.required]
    // PaymentMode
  });
  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.OrderForm.valid){
      this.orderService.placeOrder(this.OrderForm.value)

      this._snackBar.open('Order Placed...!!! Delivered Soon...!!', 'OK', {
        duration: 2000,
      });

      this.OrderForm.reset()
    }
  }
}
