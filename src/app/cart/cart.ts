import { Buyer } from "../login/buyer";
import { Product } from "../seller-dashboard/view-store/product";
import { Seller } from "../signup-seller/seller";

export class Cart {
    cartId!: String;
    buyer!: Buyer;
    seller!: Seller;
    product!: Product;

    constructor() {}
}
