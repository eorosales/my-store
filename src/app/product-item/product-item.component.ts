import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product:Product = {
    id: 1,
    name: '',
    price: 0.00,
    url: '',
    description: ''
  }
  quantities:number[] = [];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.quantities = this.productService.setQuantities();
  }

}
