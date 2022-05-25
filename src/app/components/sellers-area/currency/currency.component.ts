import { CurrencyModel } from './../../../models/currency.model';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-currency',
    templateUrl: './currency.component.html',
    styleUrls: ['./currency.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyComponent implements OnInit, OnDestroy {

    @Input()
    public supportedCurrency: CurrencyModel;

    public timerId: number;

    constructor(private changeDetectorRef: ChangeDetectorRef) { }

    ngOnInit(): void {
        this.timerId = window.setInterval(() => {
            this.changeDetectorRef.markForCheck();
        }, 5000);
    }

    ngOnDestroy(): void {
        window.clearInterval(this.timerId);
    }
}
