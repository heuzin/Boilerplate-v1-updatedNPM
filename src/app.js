class WorkoutApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddExercise = this.handleAddExercise.bind(this)
        this.handleDeleteExercise = this.handleDeleteExercise.bind(this)
        this.state = {
            exercise: []
        }
    }
    handleAddExercise(e) {
        e.preventDefault()

        const exercise = e.target.elements.exercio.value.trim()

        this.setState((prevState) => {
            return {
                exercise: prevState.exercise.concat(exercise)
            }
        })
    }
    handleDeleteExercise(toRemove) {
        this.setState((prevState) => {
            return {
                exercise: prevState.exercise.filter((exercise) => toRemove !== exercise)
            }
        })
    }
    render() {
        const title = 'Workout app'
        return (
            <div>
                <Header title={title}/>
                <Exercises exercise={this.state.exercise} handleDeleteExercise={this.handleDeleteExercise}/>
                <AddExercise handleAddExercise={this.handleAddExercise}/>
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <h1>{props.title}</h1>
    )
}

const Exercises = (props) => {
    return (
        <div>
            {props.exercise.map((exerciseName) => <ExerciseName handleDeleteExercise={props.handleDeleteExercise} key={exerciseName} exerciseText={exerciseName}/>)}
        </div>
    )
}

const ExerciseName = (props) => {
    return (
        <div>
            {props.exerciseText}
            <button onClick={() => {props.handleDeleteExercise(props.exerciseText)}}>Remove</button>
        </div>
    )
}

const AddExercise = (props) => {
    return (
        <form onSubmit={props.handleAddExercise}>
            <input type='text' name='exercio'/>
            <button>Add Exercise</button>
        </form>
    )
}

let appRoot = document.getElementById('app');

ReactDOM.render(<WorkoutApp />, appRoot);