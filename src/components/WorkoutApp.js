import React from 'react'
import Header from './Header';
import Exercises from './Exercises';
import AddExercise from './AddExercise';

class WorkoutApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddExercise = this.handleAddExercise.bind(this)
        this.handleDeleteAll = this.handleDeleteAll.bind(this)
        this.handleDeleteExercise = this.handleDeleteExercise.bind(this)
        this.state = {
            exercise: []
        };
    };
    handleAddExercise(exerciseText) {
        if (!exerciseText) {
            return 'Enter valid exercise name.'
        } else if (this.state.exercise.indexOf(exerciseText) > -1) {
            return 'That exercise already exists.'
        };
        
        this.setState((prevState) => {
            return {
                exercise: prevState.exercise.concat(exerciseText)
            };
        });
    };
    handleDeleteAll() {
        this.setState(() => {
            return {
                exercise: []
            };
        });
    };
    handleDeleteExercise(toRemove) {
        this.setState((prevState) => {
            return {
                exercise: prevState.exercise.filter((exercise) => toRemove !== exercise)
            };
        });
    };
    componentDidMount() {
        // GET DATA FROM LOCAL STORAGE
        try {
            const json = localStorage.getItem('exercise')
            const exercise = JSON.parse(json)

            if (exercise) {
                this.setState(() => ({ exercise }))
            }
        } catch (e) {

        };
    };
    componentDidUpdate(prevProps, prevState) {
        // SAVE TO LOCAL STORAGE
        if (prevState.exercise.length !== this.state.exercise.length) {
            const json = JSON.stringify(this.state.exercise)
            localStorage.setItem('exercise', json)
        };
    };
    render() {
        const title = 'Workout app'
        return (
            <div>
                <Header title={title}/>
                <Exercises exercise={this.state.exercise} handleDeleteAll={this.handleDeleteAll} handleDeleteExercise={this.handleDeleteExercise}/>
                <AddExercise handleAddExercise={this.handleAddExercise}/>
            </div>
        );
    };
};

export default WorkoutApp;