import { OrderedProduct, OrderedProduct2 } from '../definitions/orderDefinitions';
import { Product } from '../definitions/productDefintions';

// OrderedProduct is een compositie van Product, dus om de category te krijgen, moeten we eerst de product property benaderen.
// Hoewel dit prima werkt, is het misschien toch handiger om gebruik te maken van extensie in plaats van compositie?
export const getProductCategoryName = (product: OrderedProduct | Product) => {
    if ('product' in product) {
        return product.product.category.name;
    }
    return product.category.name;
}

// Type Guard om te checken of een value een OrderedProduct is.
// Hier is het dus niet erg dat we any gebruiken, omdat we juist willen checken of de value van een bepaald type is.
// Maar let op, als je een andere type hebt met een 'product' property, dan zal deze functie ook true returnen.
export const valueIsOrderedProduct = (value: any): value is OrderedProduct => {
    return 'product' in value;
}

export const getProductCategoryName2 = (product: OrderedProduct2 | Product) => {
    return product.category.name;
}

export const getPriceAtOrder = (product: Product): number => {
    if (product.discount && product.discount > 0) {
        return product.price * (1 - product.discount);
    }

    return product.price;
}
