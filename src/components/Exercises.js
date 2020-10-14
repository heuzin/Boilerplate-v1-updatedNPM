import React from 'react';
import ExerciseName from './ExerciseName';

const Exercises = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteAll}>Remove All</button>
            {props.exercise.map((exerciseName) => <ExerciseName handleDeleteExercise={props.handleDeleteExercise} key={exerciseName} exerciseText={exerciseName}/>)}
        </div>
    );
};

export default Exercises;