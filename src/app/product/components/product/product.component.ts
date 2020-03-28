import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit,
    DoCheck,
    OnDestroy } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy { // OnChanges, OnInit {

    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();

    constructor(
      private cartService: CartService
    ) {
        console.log('1. Hola, soy el constructor!');
    }

    ngOnInit() {
        console.log('4. Hey, soy el ngOnInit!');
    }

    ngDoCheck() {
        console.log('4. Yey, soy el ngDoCheck!');
    }

    ngOnDestroy() {
        console.log('5. Seek and ngOnDestroy!');
    }

    addCart() {
        console.log('Añadir al carrito');
        this.cartService.addCart(this.product);
        // this.productClicked.emit(this.product.id);
    }

}
