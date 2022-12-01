import { Product } from "../product";

export class Pet extends Product {
    gender!: String;
    species!: String;
    breed!: String;
    age!: Number;
}
