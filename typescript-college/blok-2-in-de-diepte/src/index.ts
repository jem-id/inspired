import { customers } from './data/customerData';
import { products } from './data/productData';
import { Order, OrderedProduct, OrderStatus } from './definitions/orderDefinitions';
import { replaceItemInArray } from './utils/arrayUtils';
import { getPriceAtOrder, getProductCategoryName } from './utils/productUtil';
import { generateUUID } from './utils/uuidUtils';

const selectedProduct = products[0];
const orderedProduct: OrderedProduct = {
    product: selectedProduct,
    quantity: 2,
    priceAtOrder: getPriceAtOrder(selectedProduct),
}

const order: Order = {
    id: generateUUID(),
    products: [orderedProduct],
    status: 'Pending', // Maar dit is toch één van de values van OrderStatus enum?
    // status: OrderStatus.Pending,
    customer: customers[0],
};


console.log('Nieuwe bestelling:', order);
console.log('Productcategorie:', getProductCategoryName(order.products[0]));
console.log('---------------------------');

let orders = [order];
const updatedOrder = {
    ...order,
    status: OrderStatus.Shipped,
}

orders = replaceItemInArray(orders, 0, updatedOrder);
console.log('Bijgewerkte bestellingen:', orders);
