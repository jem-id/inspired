import { Product } from '../definitions/productDefintions';
import { generateUUID } from '../utils/uuidUtils';

const largePlantsCategory = {
    id: generateUUID(),  // Iets veiliger dan een random oplopend nummer.
    name: 'Large Plants',
};

export const products: Product[] = [
    {
        id: generateUUID(),
        name: 'Strelitzia Nicolai',
        price: 29.99,
        quantity: 10,
        category: largePlantsCategory,
        discount: 0.1,
    },
    {
        id: generateUUID(),
        name: 'Kentia',
        price: 67.99,
        quantity: 5,
        category: largePlantsCategory,
    }
]; // satisfies Product[];
