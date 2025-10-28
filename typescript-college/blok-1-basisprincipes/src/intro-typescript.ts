// Het verschil tussen type en interface is minimaal, maar over het algemeen wordt type vaker gebruikt voor primitieve types en samengestelde types,
// terwijl interface vaker wordt gebruikt voor objecten. Hier gebruiken we type om een objecttype te definiëren, maar kan net zo goed met een interface.
type Product = {
    name: string,
    price: number,
    amount: number,
}

const products: Product[] = [
    { name: 'Strelitzia Nicolai', price: 29.99, amount: 10 },
    { name: 'Kentia', price: 67.99, amount: 20 },
    { name: 'Ficus Lyrata', price: '24 euro', amount: 5 },
    // { name: 'Ficus Lyrata', price: 24, amount: 5 },
];

const getTotalProductPrice = (products: Product[]) => {
    return products.reduce((total, product) => {
        return total + product.price * product.amount;
    }, 0);
}

const getProductName = (product: Product): number => {
    return product.name;
}

console.log(getTotalProductPrice(products));

// Type inference:
// Typescript raad automatisch het type af op basis van de waarde die je toewijst.
let myFavoriteProduct = 'Monstera'
let myBudget = 49.99;
let isOnSale = true;

// Hoe zal typescript deze variabelen typeren?
const mySecondFavoriteProduct = 'Ficus';
const isExpensive = false;

// Any type:
// Het any type zorgt ervoor dat een variabele elk type kan hebben. Soms handig, maar meestal niet gewenst.
let ditWilJeLieverNiet: any = 0;
ditWilJeLieverNiet = 'Een string';

// Geen idee welk type dit is:
let unknownValue: unknown;

// Dit mag wel:
unknownValue = 123;     
unknownValue = "Hello World";   
unknownValue = { a: 1 };

// Maar dit gaat fout, omdat TypeScript niet weet wat het type is:
console.log(unknownValue.toUpperCase()); 

// Maar we kunnen het type wel controleren:
if (typeof unknownValue === 'string') {
    console.log(unknownValue.toUpperCase()); // Nu mag het wel
}

enum Color {
    Red = 'RED',
    Green = 'GREEN',
    Blue = 'BLUE',
    // Yellow = 'YELLOW'
}

function getTranslatedColor(color: Color): string {
    switch (color) {
        case Color.Red:
            return 'Rood';
        case Color.Green:
            return 'Groen';
        case Color.Blue:
            return 'Blauw';
        default:
            // We geven TypeScript hier een hint: default kan nooit voorkomen
            const _exhaustiveCheck: never = color;
            return _exhaustiveCheck; // TypeScript geeft een fout als er een nieuwe kleur wordt toegevoegd
    }
}
