import { useForm, type FormErrors } from './useForm';

interface IProduct {
    id: string;
    name: string;
    price: number;
    amount: number;
}

export default function AddProductForm() {
    const initialValues: IProduct = {
        id: '',
        name: '',
        price: 0,
        amount: 0,
    };

    function handleValidate(values: IProduct): FormErrors<IProduct> {
        const errors: FormErrors<IProduct> = {};

        if (!values.id) {
            errors.id = 'ID is verplicht';
        }

        if (!values.name) {
            errors.name = 'Name is verplicht';
        }

        if (values.price <= 0) {
            errors.price = 'Prijs moet groter zijn dan 0';
        }

        if (values.amount < 0) {
            errors.amount = 'Aantal kan niet negatief zijn';
        }

        return errors;
    }

    const { values, errors, handleChange, handleSubmit } = useForm<IProduct>({
        initialValues,
        validate: handleValidate,
    });

    return (
        <>
            <h2>Product Toevoegen</h2>

            <h3>Waarden:</h3>
            <div>
                <label>Name: </label>
                <input
                    type='text'
                    value={values.name}
                    name='name'
                    onChange={e => handleChange('name', e.target.value)}
                />

                <br />

                <label>Prijs: </label>
                <input
                    type='number'
                    value={values.price}
                    name='price'
                    onChange={e => handleChange('price', parseFloat(e.target.value))}
                />
            </div>

            <button onClick={handleSubmit}>Verzenden</button>

            <pre>{JSON.stringify(values, null, 2)}</pre>

            <h3>Validatiefouten:</h3>
            <ul>
                {Object.entries(errors).map(([field, error]) => (
                    <li key={field}>
                        <b>{field}:&nbsp;</b>
                        <span>{error}</span>
                    </li>
                ))}
            </ul>
        </>
    );
}
