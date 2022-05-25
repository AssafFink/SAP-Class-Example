import { createStore } from 'redux'; // npm i redux
import { ProductModel } from './../models/product.model';

// Products Global State
export class ProductsState {
    public products: ProductModel[] = [];
}

// Products Action Type: 
export enum ProductsActionType {
    AddProduct,
    UpdateProduct,
    DeleteProduct,
    FetchProducts
}

// One action to perform: 
export interface ProductsAction {
    type: ProductsActionType; // Which action to do
    payload: any; // The data to send
}

// Function performing the action: 
export function productsReducer(currState = new ProductsState(), action: ProductsAction): ProductsState {

    const newState = { ...currState };

    switch (action.type) {
        case ProductsActionType.FetchProducts:
            newState.products = action.payload; // Here payload is all products.
            break;

        case ProductsActionType.AddProduct:
            newState.products.push(action.payload); // Here payload is product to add
            break;

        // ...
    }

    return newState;

}

// Store - managing object:
export const productsStore = createStore(productsReducer);
