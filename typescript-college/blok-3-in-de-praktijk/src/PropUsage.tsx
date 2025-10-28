import type { MouseEvent } from "react";

// Dit is een voorbeeld van hoe je props kunt gebruiken in React met TypeScript.

// We definiëren een interface voor de props die een ProductTile component verwacht.
interface IProductTileProps {
    name: string;
    imageUrl: string;
    handlePlaceBid: (event: MouseEvent<HTMLButtonElement>) => void;
}

export function ProductTile(props: IProductTileProps) {
    // Destructure de props voor makkelijker gebruik. Al kan je ze ook direct via props.name etc. benaderen.
    const { name, imageUrl, handlePlaceBid } = props;

    return (
        <div>
            <h2>{name}</h2>
            <img src={imageUrl} alt={name} />
            <button onClick={handlePlaceBid}>Bied op {name}</button>
        </div>
    );
}

export function ProductList() {
    const products = [
        { name: 'Monstera', imageUrl: '/images/monstera.jpg' },
        { name: 'Ficus Lyrata', imageUrl: '/images/ficus-lyrata.jpg' },
        { name: 'Strelitzia Nicolai', imageUrl: '/images/strelitzia-nicolai.jpg' },
    ];

    return (
        <div>
            {products.map(product => (
                <ProductTile 
                    key={product.name}
                    name={product.name}
                    imageUrl={product.imageUrl}
                    handlePlaceBid={(e) => {
                        console.log('event:', e);
                        alert(`Je hebt geboden op ${product.name}`);
                    }}
                />
            ))}
        </div>
    );
}
