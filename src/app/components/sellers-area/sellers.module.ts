import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellersComponent } from './sellers/sellers.component';
import { WholesalersComponent } from './wholesalers/wholesalers.component';
import { RetailersComponent } from './retailers/retailers.component';
import { CurrencyComponent } from './currency/currency.component';

const routes: Routes = [
    {path: "", component: SellersComponent}, // /sellers
    {path: "retailers", component: RetailersComponent}, // /sellers/retailers
    {path: "wholesalers", component: WholesalersComponent}, // /sellers/wholesalers
];

@NgModule({
    declarations: [
        SellersComponent,
        WholesalersComponent,
        RetailersComponent,
        CurrencyComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class SellersModule { }
