import { APP_THEME, Theme } from './../../../services/theme/theme.service';
import { Component, Inject, OnInit } from '@angular/core';

const facebookTheme: Theme = {
    color: "blue",
    backgroundColor: "wheat"
};

@Component({
    selector: 'app-facebook',
    templateUrl: './facebook.component.html',
    styleUrls: ['./facebook.component.css'],
    providers: [{ provide: APP_THEME, useValue: facebookTheme }]
})
export class FacebookComponent implements OnInit {

    constructor(@Inject(APP_THEME) public appTheme: Theme) { }

    ngOnInit(): void {
    }

}
