import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VatComponent } from './vat.component';
import { MonetaryService } from 'src/app/services/monetary/monetary.service';

describe('VatComponent', () => {

    let component: VatComponent;
    let fixture: ComponentFixture<VatComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [VatComponent],
            imports: [CommonModule, FormsModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(VatComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it("should init price with 0", () => {
        expect(component.price).toEqual(0);
    });

    it("should contain vat between 0 to 100", () => {
        expect(component.vat).toBeGreaterThanOrEqual(0);
        expect(component.vat).toBeLessThanOrEqual(100);
    });

    it("should calculate vat correctly", () => {
        component.price = Math.floor(Math.random() * 1000);
        const service = new MonetaryService();
        const vat = service.getVat(component.price, component.percent);
        component.calc();
        expect(component.vat).toEqual(vat);
    });

    it("should contain h4 with text 'VAT Calculator'", () => {
        const html = fixture.debugElement.nativeElement as HTMLElement;
        const h4 = html.querySelector("h4") as HTMLHeadingElement;
        expect(h4.textContent).toContain("VAT Calculator");
    });

    it("should contain input[type=number]", () => {
        const html = fixture.debugElement.nativeElement as HTMLElement;
        const input = html.querySelector("input") as HTMLInputElement;
        expect(input.type).toEqual("number");
    });

});
