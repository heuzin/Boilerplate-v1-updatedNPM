import { createStore, combineReducers } from 'redux';

const demoState = {
    expenses: [{
        id: 'asdasdasf',
        description: 'January Rent',
        note: 'this was the finao paymnet for that PaymentAddress',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}