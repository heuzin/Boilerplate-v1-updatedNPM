import React from 'react';

const ExerciseName = (props) => {
    return (
        <div>
            {props.exerciseText}
            <button onClick={() => {props.handleDeleteExercise(props.exerciseText)}}>Remove</button>
        </div>
    );
};

export default ExerciseName;