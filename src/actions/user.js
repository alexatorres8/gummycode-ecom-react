import {
    SET_USER_PURCHASES
} from './types';

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 1,
                total: 9.40,
                orderNumber: 'B0048248343',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Max Hudgens',
                    shippingAddress: '456 West State Street'
                }
            },
            {
                _id: 2,
                total: 1.40,
                orderNumber: 'C0048248343',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Tiffany Hudgens',
                    shippingAddress: '789 West State Street'
                }
            },
            {
                _id: 3,
                total: 2.40,
                orderNumber: 'D0048248343',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Kristine Hudgens',
                    shippingAddress: '1011 West State Street'
                }
            }
        ]
    })
}