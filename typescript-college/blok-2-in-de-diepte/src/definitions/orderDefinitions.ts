import { Product } from './productDefintions';
import { Customer } from './userDefinitions';

// Je kan voor een status gebruik maken van types of enums.
// Hier is het voordeel van enums dat je ze makkelijk kan hergebruiken en minder kans hebt op typefouten.
type OrderStatusValues = 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled';

export enum OrderStatus {
    Pending = 'Pending',
    Shipped = 'Shipped',
    Delivered = 'Delivered',
    Cancelled = 'Cancelled'
}

// Je kunt ook een type maken dat de string values van de enum bevat.
// Dit kan handig zijn als je bijvoorbeeld een functie hebt die een string verwacht in plaats van de enum zelf. (gebeurt niet vaak)
type OrderStatusStrings = keyof typeof OrderStatus;

export interface Order {
    readonly id: string;
    customer: Customer;
    products: OrderedProduct[];
    status: OrderStatus;
}

// Compositie vs Extensie
// Soms wil je een interface maken die een andere interface gebruikt (compositie)
// In dit geval zou ik zelf voor compositie kiezen, omdat het makkelijker leesbaar is.
export interface OrderedProduct {
    product: Product;
    quantity: number;
    priceAtOrder: number;
}

// Maar je zou ook kunnen kiezen voor extensie, waarmee je een nieuw type maakt dat het bestaande type uitbreidt.
// Het is in mijn ogen ook meer subjectief welke van de twee beter is en ligt vaak aan de situatie.
export interface OrderedProduct2 extends Product {
    quantity: number;
}

// Het is ook mogelijk om slechts een deel van een interface te gebruiken met 'Pick' of 'Omit'.
// Soms handig als je maar een paar properties nodig hebt.
export interface OrderedProduct3 extends Pick<Product, 'id' | 'name' | 'price'> {
    quantity: number;
    priceAtOrder: number;
}

// Omit is ook mogelijk om bepaalde properties weg te laten met Omit.
export interface OrderedProduct4 extends Omit<Product, 'quantity' | 'category'> {
    quantity: number;
    priceAtOrder: number;
}
