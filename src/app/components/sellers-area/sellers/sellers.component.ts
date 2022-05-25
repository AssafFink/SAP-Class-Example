import { CurrencyModel } from './../../../models/currency.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-sellers',
    templateUrl: './sellers.component.html',
    styleUrls: ['./sellers.component.css']
})
export class SellersComponent implements OnInit, OnDestroy {

    public supportedCurrency: CurrencyModel;

    private timerId: number;

    constructor() { }

    ngOnInit(): void {

        this.supportedCurrency = new CurrencyModel("Bitcoin", this.getBitcoinValue());
        
        this.timerId = window.setInterval(() => {
            this.supportedCurrency.value = this.getBitcoinValue();
            console.log(Math.random());
        }, 200);

    }
    
    ngOnDestroy(): void {
        window.clearInterval(this.timerId);
    }

    private getBitcoinValue(): number {
        return 10000 + Math.random() * 1000; // From backend.
    }

}
