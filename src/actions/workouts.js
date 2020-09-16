import uuid from 'uuid';

// ADD WORKOUT
const addWorkout = ({ name = '', series = '', rep = 0, description = '', createdAt = 0 } = {}) => ({
    type: 'ADD_WORKOUT',
    workout: {
        id: uuid(),
        name,
        series,
        rep,
        description,
        createdAt
    }
})

export { addWorkout }