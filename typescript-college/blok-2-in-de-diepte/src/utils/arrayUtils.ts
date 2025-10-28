

import { OrderedProduct } from '../definitions/orderDefinitions';
import { Product } from '../definitions/productDefintions';

// Een hele simple utility functie om een item in een array te vervangen op basis van de index.
// Hier hebben we generics gebruikt zodat deze functie met elke type array kan werken
// Anders moet je voor elke type een losse signature maken wat onhandig is.
export const replaceItemInArray = <T>(array: T[], index: number, newItem: T): T[] => {
    return array.map((item, i) => i === index ? newItem : item);
};

// Dit is dezelfde functie, maar dan zonder generics.
// Je ziet dat we nu voor elk type een aparte signature moeten maken, wat onhandig is zodra je applicatie groeit.
function replaceItemInArrayGeenGenerics(array: Product[], index: number, newItem: Product): Product[];
function replaceItemInArrayGeenGenerics(array: OrderedProduct[], index: number, newItem: OrderedProduct): OrderedProduct[];
function replaceItemInArrayGeenGenerics(array: any[], index: number, newItem: any): any[] {
    return array.map((item, i) => i === index ? newItem : item);
}

// Voorbeeld van het gebruik van generics met een specifiek type
const selectedProduct = {} as Product; 
const products: Product[] = [];

// Typescript kan hier ook gebruik maken van type inference om het type te bepalen, 
// maar je kan het ook expliciet maken door de type mee te geven in de arguments.
const updatedProducts = replaceItemInArray<Product>(products, 0, selectedProduct);
const updatedProductsGeenGenerics = replaceItemInArrayGeenGenerics(products, 0, selectedProduct);
