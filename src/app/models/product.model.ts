export class ProductModel {
    
    public id: number;
    public name: string;
    public price: number;
    public stock: number;
    public imageName: string;
    public image: File;

    public getDiscount(): number {
        return this.price * 0.1;
    }
}
