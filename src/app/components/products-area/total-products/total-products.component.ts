import { productsStore } from './../../../redux/products-state';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Unsubscribe } from 'redux';

@Component({
    selector: 'app-total-products',
    templateUrl: './total-products.component.html',
    styleUrls: ['./total-products.component.css']
})
export class TotalProductsComponent implements OnInit, OnDestroy {

    public count: number;
    private unsubscribe: Unsubscribe;

    constructor() { }

    ngOnInit(): void {
        this.count = productsStore.getState().products.length;
        this.unsubscribe = productsStore.subscribe(() => {
            this.count = productsStore.getState().products.length;
        });
    }

    ngOnDestroy(): void {
        this.unsubscribe();
    }

}
