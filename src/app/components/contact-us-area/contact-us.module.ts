import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FacebookComponent } from './facebook/facebook.component';
import { VatComponent } from './vat/vat.component';

@NgModule({
    declarations: [
        ContactUsComponent,
        FacebookComponent,
        VatComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class ContactUsModule { }
