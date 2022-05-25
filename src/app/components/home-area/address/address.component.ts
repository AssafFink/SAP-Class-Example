import { ColorsService } from './../../../services/colors/colors.service';
import { Component, Injector, OnInit } from '@angular/core';

@Component({
    selector: 'app-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.css'],
    // providers: [ColorsService]
})
export class AddressComponent implements OnInit {

    public bg: string;

    // constructor(private colorsService: ColorsService) { }
    constructor(private injector: Injector) { }

    ngOnInit(): void {
        const colorsService = this.injector.get(ColorsService);
        this.bg = colorsService.getRandomColor();
    }

}
