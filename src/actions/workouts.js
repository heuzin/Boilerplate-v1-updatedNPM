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

// REMOVE WORKOUT
const removeWorkout = ({ id } = {}) => ({
    type: 'REMOVE_WORKOUT',
    id
})

// EDIT WORKOUT
const editWorkout = (id, updates) => ({
    type: 'EDIT_WORKOUT',
    id,
    updates
})

export { addWorkout, removeWorkout, editWorkout }