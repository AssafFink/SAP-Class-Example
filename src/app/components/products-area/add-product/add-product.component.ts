import { ProductsService } from 'src/app/services/products/products.service';
import { ProductModel } from './../../../models/product.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

// Template Driven Forms - two-way binding

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

    public product = new ProductModel();

    @ViewChild("imageBox")
    public imageRef: ElementRef<HTMLInputElement>;
    
    constructor(private productsService: ProductsService, private router: Router) { }
    
    ngOnInit(): void {
    }

    public async send() {
        try {
            this.product.image = this.imageRef.nativeElement.files[0];
            await this.productsService.addProduct(this.product);
            alert("Product has been added.");
            this.router.navigateByUrl("/products");
        }
        catch(err: any) {
            alert(err.message);
        }
      
    }
    
}

// Reactive Driven Forms - TypeScript objects bounded to inputs