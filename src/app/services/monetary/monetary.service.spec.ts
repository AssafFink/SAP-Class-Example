import { TestBed } from '@angular/core/testing';
import { MonetaryService } from './monetary.service';

// ng test
// ng test --include some-folder

describe('MonetaryService', () => {

    let service: MonetaryService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(MonetaryService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it("should calculate vat correctly", () => {
        const price = Math.floor(Math.random() * 1000);
        const percent = 17;
        const vat = service.getVat(price, percent);
        expect(vat).toEqual(price * percent / 100);
    });


});
