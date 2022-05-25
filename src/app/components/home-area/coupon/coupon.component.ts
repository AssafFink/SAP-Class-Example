import { ColorsService } from 'src/app/services/colors/colors.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-coupon',
    templateUrl: './coupon.component.html',
    styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {

    public styles = {
        color: this.colorsService.getRandomColor(),
        fontWeight: Math.random() < 0.5 ? "bold" : null
    };

    constructor(private colorsService: ColorsService) { }

    ngOnInit(): void {
    }

    public isWeekend(): boolean {
        const now = new Date();
        const day = now.getDay() + 1;
        return day >= 6;
    }

}
