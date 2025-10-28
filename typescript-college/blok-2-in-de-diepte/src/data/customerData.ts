import { Customer } from '../definitions/userDefinitions';
import { generateUUID } from '../utils/uuidUtils';

export const customers: Customer[] = [
  { id: generateUUID(), username: 'janedoe', email: 'janedoe@example.com' , billingAddress: 'Plein 1, Den Haag, NL' },
  { id: generateUUID(), username: 'henk', email: 'henk@example.com' , billingAddress: 'Straat 2, Honserlersdijk, NL' },
];
