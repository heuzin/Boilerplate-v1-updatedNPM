import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, description, amount, createdAt, id }) => (
    <div>
        <h1>{description}</h1>
        <p>{amount} - {createdAt}</p>
        <button onClick={(e) => {
            console.log(id)
            dispatch(removeExpense({ id }))
        }}>Remove</button>
    </div>
)

export default connect()(ExpenseListItem)