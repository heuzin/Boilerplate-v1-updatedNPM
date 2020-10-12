class WorkoutApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            exercise: []
        }
    }
    render() {
        const title = 'Workout app'
        return (
            <div>
                <Header title={title}/>
                <ExerciseName exercise={this.state.exercise}/>
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

let appRoot = document.getElementById('app');

ReactDOM.render(<WorkoutApp />, appRoot);