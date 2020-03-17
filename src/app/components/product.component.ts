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
import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy { // OnChanges, OnInit {

    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();

    constructor() {
        console.log('1. Hola, soy el constructor!');
    }

/*     ngOnChanges(changes: SimpleChanges) {
        console.log('2. Qué tal, soy el ngOnChange');
        console.log(changes);
    } */

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
        this.productClicked.emit(this.product.id);
    }

}
