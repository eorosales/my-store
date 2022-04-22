import { Injectable } from '@angular/core';
import { Observable, toArray } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 
import { Product } from '../models/Product';

export interface ProductInCart {
  product: Product,
  quantity: number
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  products:Product[] = [];
  quantities:number[] = [1,2,3,4,5,6,7,8,9,10]
  productsInCart:ProductInCart[] = [];
  totalCost = 0;

  constructor(private http: HttpClient) { }

  getProducts():Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:4200/assets/data.json')
  }

  setQuantities():number[] {
    return this.quantities;
  }

  getCart():ProductInCart[] {
    return this.productsInCart;
  }

  addProductToCart(productQuantity:ProductInCart) {
    const productCheck = this.productsInCart.find(p => {
      return p.product.id === productQuantity.product.id
    })
    !productCheck ? 
    this.productsInCart.push(productQuantity) :
    alert("Item already in cart!");
  };

  getCartTotal() {
    // Calculate each products total cost taking quantity multiplied by price
    const totalPricePerProduct = this.productsInCart.map(p => {
      return p.product.price * p.quantity
    })
    
    // Add the total cost of each product in the cart returning the sum of the cart 
    const sumOfProductsInCart = totalPricePerProduct.reduce((previousValue, currentValue) => previousValue + currentValue,
    0
    );
    return this.totalCost = Number(sumOfProductsInCart.toString().match(/^\d+(?:\.\d{0,2})?/));
  }

  removeProductFromCart(currentProduct:ProductInCart):ProductInCart[] {
    const updatedCart = this.productsInCart.filter(p => {
      return p !== currentProduct;
    })
    return this.productsInCart = updatedCart;
  }
 
}

