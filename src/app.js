import React from 'react';
import ReactDOM from 'react-dom'
import WorkoutDashboardPage from './compoments/WorkoutDashboardPage'
import AppRouter from './routers/AppRouter';
  
ReactDOM.render(
    <AppRouter/>,
    document.getElementById('app')
);