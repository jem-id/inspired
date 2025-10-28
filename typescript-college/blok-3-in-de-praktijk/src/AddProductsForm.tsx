import { useState, type ChangeEvent } from "react";

// Een simulatie van een command die je vanuit een API-endpoint zou kunnen ontvangen, bijvoorbeeld bij het toevoegen van een nieuw product.
interface AddProductCommand {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    amount: number;
}

// Het is wenselijk om zo dicht mogelijk bij het command te blijven, maar soms wil je een iets andere vorm gebruiken in je applicatie.
interface IProductToAdd extends Omit<AddProductCommand, 'imageUrl'> {
    image: File;
}

// Een simpele React component die een formulier weergeeft om producten toe te voegen.
function AddProductsForm() {
    // State voor een nieuw product dat toegevoegd gaat worden.
    const [product, setProduct] = useState<IProductToAdd>();

    function handleChangeImage(event: ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];

        if (file) {
            setProduct((prevState): IProductToAdd | undefined => prevState && ({
                ...prevState,
                image: file,
            }));
        }
    }

    async function handleSubmit() {
        if (!product) {
            throw new Error("No product to submit");
        }

        try {
            const command = mapStateToCommand(product);
            await Api.addProduct(command);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    }

    // Een functie die de state van het formulier omzet naar een AddProductCommand.
    function mapStateToCommand(product: IProductToAdd): AddProductCommand {
        return {
            id: product.id,
            name: product.name,
            price: product.price,
            amount: product.amount,
            imageUrl: URL.createObjectURL(product.image), // In een echte app zou je de afbeelding eerst uploaden en de URL daarvan gebruiken.
        };
    }

    return (
        <div>Dit mag jij invullen :D</div>
    )
}

// Simulatie van een API-client om een product toe te voegen.

const Api = {
    addProduct: async (command: AddProductCommand) => {
        console.log("Product added:", command);
        return Promise.resolve();
    },
};
