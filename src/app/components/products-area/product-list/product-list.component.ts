import { ProductModel } from './../../../models/product.model';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    // encapsulation: ViewEncapsulation.None
})
export class ProductListComponent implements OnInit {

    public products: ProductModel[];

    constructor(private productsService: ProductsService) { }

    async ngOnInit(): Promise<void> {
        try {
            this.products = await this.productsService.getAllProducts();
        }
        catch(err: any) {
            alert(err.message);
        }
    }

}
