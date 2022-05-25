import { Component, OnInit } from '@angular/core';
import { MonetaryService } from 'src/app/services/monetary/monetary.service';

@Component({
    selector: 'app-vat',
    templateUrl: './vat.component.html',
    styleUrls: ['./vat.component.css']
})
export class VatComponent implements OnInit {

    public price = 0;
    public percent = 17;
    public vat = 0;

    constructor(private monetaryService: MonetaryService) { }

    public calc(): void {
        this.vat = this.monetaryService.getVat(this.price, this.percent);
    }

    public clear(): void {
        this.price = 0;
        this.vat = 0;
    }

    ngOnInit(): void {
    }

}
