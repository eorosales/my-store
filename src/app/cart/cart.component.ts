import { Component, OnInit } from '@angular/core';
import { ProductService, ProductInCart } from '../services/product.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  fullName:string = '';
  address:string = '';
  creditCardNumber:string = '';

  currentCart:ProductInCart[] = [];
  totalPrice:number = 0;
  
  constructor(
    private productService:ProductService
  ) { }

  ngOnInit(): void {
    this.currentCart = this.productService.getCart();
    this.totalPrice = this.productService.getCartTotal();
  }

  onSubmit():void {
    console.log(`
      Full Name: ${this.fullName},
      Addres: ${this.address},
      Credit Card Number: ${this.creditCardNumber}
    `)
  }
}