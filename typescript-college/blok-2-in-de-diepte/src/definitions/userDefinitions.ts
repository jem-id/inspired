interface User {
    readonly id: string;
    username: string;
    email: string;
}

export interface Customer extends User {
    billingAddress: string;
}
