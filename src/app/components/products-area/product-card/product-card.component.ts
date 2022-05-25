import { environment } from './../../../../environments/environment';
import { ProductModel } from './../../../models/product.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

    @Input()
    public product: ProductModel;

    public imageSource: string;

    constructor() { }

    ngOnInit(): void {
        this.imageSource = environment.productsUrl + "images/" + this.product.imageName;
    }

}
