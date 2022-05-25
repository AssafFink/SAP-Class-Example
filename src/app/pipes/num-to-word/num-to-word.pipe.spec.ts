import { NumToWordPipe } from './num-to-word.pipe';

describe('NumToWordPipe', () => {

    let pipe: NumToWordPipe;

    beforeEach(() => {
        pipe = new NumToWordPipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it("should return num as word", () => {
        expect(pipe.transform(1)).withContext("1 --> one").toEqual("one");
        expect(pipe.transform(2)).withContext("2 --> two").toEqual("two");
    });

    it("should return same number", () => {
        expect(pipe.transform(12)).withContext("12 --> 12").toEqual(12);
        expect(pipe.transform(-12)).withContext("-12 --> -12").toEqual(-12);
    });

});
