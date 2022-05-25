import { environment } from './../../../../environments/environment';
import { ProductModel } from './../../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    public product: ProductModel;
    public imageSource: string;

    constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute) { }

    async ngOnInit() {
        try {
            const id: number = +this.activatedRoute.snapshot.params["id"];
            this.product = await this.productsService.getOneProduct(id);
            this.imageSource = environment.productsUrl + "images/" + this.product.imageName;
        }
        catch(err: any) {
            alert(err.message);
        }
    }

}
