const products = [
    { name: 'Strelitzia Nicolai', price: 29.99, amount: '10' },
    { name: 'Kentia', price: 67.99, amount: 20 },
    { name: 'Ficus Lyrata', price: '24 euro', amount: 5 },
];

const getTotalPrice = (products) => {
    return products.reduce((total, product) => {
        return total + product.price * product.amount;
    }, 0);
}

console.log(getTotalPrice(products));
