import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '@core/services/products/products.service';
import { Product } from '@core/models/product.model';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.product$ = this.route.params
      .pipe(
        switchMap((params: Params) => this.productsService.getProduct(params.id) )
      );
  }

  createProduct() {
    const newProduct: Product = {
      id: '333',
      title: 'nuevo desde angular',
      image: 'assets/images/hoodie.png',
      price: 3000,
      description: 'created by @cristobalvega at Platzi! '
    };
    this.productsService.createProduct(newProduct)
      .subscribe(product => {
        console.log(product);
      });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      id: '333',
      title: 'Un gran Hoodie',
      image: 'assets/images/hoodie.png',
      price: 5555,
      description: 'created by @cristobalvega at Platzi! '
    };
    this.productsService.updateProduct('333', updateProduct)
      .subscribe(product => {
        console.log(product);
      });
  }

  deleteProduct() {
    this.productsService.deleteProduct('333')
      .subscribe(rta => {
        console.log(rta);
      });
  }
}
