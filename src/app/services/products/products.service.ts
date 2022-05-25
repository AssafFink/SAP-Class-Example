import { environment } from './../../../environments/environment';
import { ProductModel } from './../../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ProductsActionType, productsStore } from 'src/app/redux/products-state';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor(private http: HttpClient) { }

    public async getAllProducts(): Promise<ProductModel[]> {
        let products = productsStore.getState().products;
        if (products.length === 0) {
            products = await firstValueFrom(this.http.get<ProductModel[]>(environment.productsUrl + "delayed"));
            productsStore.dispatch({ type: ProductsActionType.FetchProducts, payload: products });
        }
        return products;
    }

    public async getOneProduct(id: number): Promise<ProductModel> {
        // const product = await firstValueFrom(this.http.get<ProductModel>(environment.productsUrl + id));
        const product = productsStore.getState().products.find(p => p.id === id);
        return product;
    }

    public async addProduct(product: ProductModel): Promise<void> {
        const formData = new FormData();
        formData.append("name", product.name);
        formData.append("price", product.price.toString());
        formData.append("stock", product.stock.toString());
        formData.append("image", product.image);
        const addedProduct = await firstValueFrom(this.http.post<ProductModel>(environment.productsUrl, formData));
        productsStore.dispatch({ type: ProductsActionType.AddProduct, payload: addedProduct });
    }

}
