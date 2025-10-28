export interface Product {
    readonly id: string; // Als we product gaan muteren, mag id niet aangepast worden.
    name: string;
    price: number;
    quantity: number;
    category: ProductCategory;
    // Zelfs met types kan het lastig zijn om snel te zien wat de inhoud is. In dit geval kan het een number of undefined zijn, maar is het een prijs of percentage?
    // Probeer altijd heel duidelijk te zijn in je types, maar ook naamgeving van properties.
    discount?: number; // Optionele property
    // discount: number | undefined; // Zelfde als hierboven, maar verplicht om expliciet te vullen.
    // discountPercentage: number | undefined; 
}

export interface ProductCategory {
    readonly id: string;
    name: string;
}
