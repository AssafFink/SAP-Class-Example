import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ClockComponent } from './clock/clock.component';
import { SloganComponent } from './slogan/slogan.component';
import { TipComponent } from './tip/tip.component';
import { SurveyComponent } from './survey/survey.component';
import { AddressComponent } from './address/address.component';
import { ColorsService } from 'src/app/services/colors/colors.service';
import { GiftCardComponent } from './gift-card/gift-card.component';
import { CouponComponent } from './coupon/coupon.component';
import { LocationComponent } from './location/location.component';

@NgModule({
    declarations: [
        HomeComponent,
        SearchComponent,
        ClockComponent,
        SloganComponent,
        TipComponent,
        SurveyComponent,
        AddressComponent,
        GiftCardComponent,
        CouponComponent,
        LocationComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        PipesModule
    ],
    // providers: [ColorsService],
    exports: [HomeComponent]
})
export class HomeModule { }
