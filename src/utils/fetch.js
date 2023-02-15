import customers from '../data/customers.json'
export const fetch = () => {
    return Promise.resolve(customers);
};