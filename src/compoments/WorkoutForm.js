import React from 'react';

class WorkoutForm extends React.Component {
    render() {
        return (
            <form>
                <input
                    type='text'
                    placeholder='Exercise Name'
                    autoFocus
                />
                <input
                    type='number'
                    placeholder='Series'
                />
                <input
                    type='number'
                    placeholder='Rep'
                />
                <button>Save Workout</button>
            </form>
        )
    }
}

export default WorkoutForm;