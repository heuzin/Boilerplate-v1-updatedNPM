import { createStore } from 'redux';
import workoutReducer from '../reducers/workout';

// Store creation
export default () => {
    const store = createStore(workoutReducer)
    return store
}