import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Product } from 'src/app/_models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor(private productervice: ProductService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productervice.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    }, error => {
      this.alertify.error(error);
    });
  }


}
