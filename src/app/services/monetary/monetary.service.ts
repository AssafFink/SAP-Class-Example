import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MonetaryService {

    public getVat(price: number, percent: number): number {
        return price * percent / 100;
    }
}
