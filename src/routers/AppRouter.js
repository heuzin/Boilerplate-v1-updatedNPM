import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import WorkoutDashboardPage from '../compoments/WorkoutDashboardPage';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path='/dashboard' component={WorkoutDashboardPage}/>
            </Switch>
        </div>
    </Router>
)

export default AppRouter;