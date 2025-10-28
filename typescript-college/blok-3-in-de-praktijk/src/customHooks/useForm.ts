import { useState } from "react";

// Een custom hook voor het beheren van formulierstate. (vooral ter illustratie, in de praktijk zou je waarschijnlijk een package gebruiken)

// Onze hook moet natuurlijk gebruikt worden met verschillende vormen van formulieren, dus T kan elk objecttype zijn.
// Van tevoren weten we ook niet hoe zo'n object eruit zal zien, dus we laten dat aan de afnemer van de hook over om te bepalen.
interface IUseFormProps<T> {
    // De initiële waarden van het formulier.
    initialValues: T;
    // Een validatiefunctie die fouten teruggeeft op basis van de huidige waarden. 
    validate: (values: T) => FormErrors<T>;
}

// Een type voor de validatiefouten. Waarbij de key een veldnaam is van T en de waarde een foutmelding.
// We gebruiken Partial zodat niet elk veld een foutmelding hoeft te hebben.
// Bijvoorbeeld: { email: 'Ongeldig emailadres' }
export type FormErrors<T> = Partial<Record<keyof T, string>>;

// Dit is een unie type voor de return waarde van handleSubmit.
// Het geeft aan of er fouten zijn of niet, en als er geen fouten zijn, worden de waarden meegegeven.
type SubmitReturnType<T> = {
    isSuccess: false;
} | {
    isSuccess: true;
    values: T;
};

interface IUseFormReturn<T> {
    // De huidige waarden van het formulier. 
    values: T;
    errors: FormErrors<T>;
    // Een functie om het formulier te versturen.
    handleSubmit: () => SubmitReturnType<T>;
    // Een functie om een specifiek veld bij te werken.
    handleChange: <K extends keyof T>(key: K, value: T[K]) => void;
}

export function useForm<T>(props: IUseFormProps<T>): IUseFormReturn<T> {
    const { initialValues, validate } = props;

    // State voor de huidige waarden van het formulier, die we kunnen bijwerken.
    const [values, setValues] = useState<T>(initialValues);

    // State voor de validatiefouten. 
    const [errors, setErrors] = useState<FormErrors<T>>({});

    // Functie om een specifiek veld bij te werken. 
    // Ook hier gebruiken we generics om te zorgen dat de key (K) en value overeenkomen met het type T.
    const handleChange = <K extends keyof T>(key: K, value: T[K]) => {
        setValues(prev => ({ ...prev, [key]: value }));
    };

    // Functie om het formulier te valideren en indien geldig, de callback aan te roepen.
    // Door middel van de callback kan de afnemer van de hook bepalen wat er gebeurt bij het versturen van het formulier.
    const handleSubmit = (): SubmitReturnType<T> => {
        const validationErrors = validate(values);
        setErrors(validationErrors);

        if (Object.entries(validationErrors).length > 0) {
            return { isSuccess: false };
        } else {
            // Natuurlijk is de else hier niet strikt noodzakelijk, maar het maakt de intentie duidelijker.
            // Geen fouten, dus roep de callback aan met de huidige waarden.
            return { isSuccess: true, values };
        }
    };

    return {
        values,
        errors,
        handleChange,
        handleSubmit,
    };
}
