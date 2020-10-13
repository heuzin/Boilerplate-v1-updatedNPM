class WorkoutApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddExercise = this.handleAddExercise.bind(this)
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
    render() {
        const title = 'Workout app'
        return (
            <div>
                <Header title={title}/>
                <ExerciseName exercise={this.state.exercise}/>
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

const ExerciseName = (props) => {
    return (
        props.exercise.map((exercise) => <p key={exercise}>{exercise}</p>)
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