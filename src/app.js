import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})


store.dispatch(addExpense({ description:'Water Bill', amount: 100, createdAt:-2000 }))
store.dispatch(addExpense({ description:'Gas Bill', amount: 300, createdAt:2000 }))
store.dispatch(setTextFilter('bill'))

ReactDOM.render(<AppRouter />, document.getElementById('app'));