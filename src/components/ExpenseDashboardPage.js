import React from 'react';
import ExpeseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters'

const ExpenaseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpeseList />
    </div>
);

export default ExpenaseDashboardPage;