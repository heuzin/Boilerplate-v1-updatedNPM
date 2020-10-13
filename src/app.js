class WorkoutApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddExercise = this.handleAddExercise.bind(this)
        this.handleDeleteAll = this.handleDeleteAll.bind(this)
        this.handleDeleteExercise = this.handleDeleteExercise.bind(this)
        this.state = {
            exercise: []
        }
    }
    componentDidMount() {
        // GET DATA FROM LOCAL STORAGE
        try {
            const json = localStorage.getItem('exercise')
            const exercise = JSON.parse(json)

            if (exercise) {
                this.setState(() => ({ exercise }))
            }
        } catch (e) {

        }
    }
    componentDidUpdate(prevProps, prevState) {
        // SAVE TO LOCAL STORAGE
        if (prevState.exercise.length !== this.state.exercise.length) {
            const json = JSON.stringify(this.state.exercise)
            localStorage.setItem('exercise', json)
        }
    }
    handleAddExercise(exerciseText) {
        if (!exerciseText) {
            return 'Enter valid exercise name.'
        } else if (this.state.exercise.indexOf(exerciseText) > -1) {
            return 'That exercise already exists.'
        }
        
        this.setState((prevState) => {
            return {
                exercise: prevState.exercise.concat(exerciseText)
            }
        })
    }
    handleDeleteAll() {
        this.setState(() => {
            return {
                exercise: []
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
                <Exercises exercise={this.state.exercise} handleDeleteAll={this.handleDeleteAll} handleDeleteExercise={this.handleDeleteExercise}/>
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
            <button onClick={props.handleDeleteAll}>Remove All</button>
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

class AddExercise extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddExercise = this.handleAddExercise.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddExercise(e) {
        e.preventDefault()
        console.log('testing')

        const exerciseText = e.target.elements.exercio.value.trim()
        const error = this.props.handleAddExercise(exerciseText)

        this.setState(() => ({ error }))

        if (!error) {
            e.target.elements.exercio.value = ''
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddExercise}>
                    <input type='text' name='exercio'/>
                    <button>Add Exercise</button>
                </form>
            </div>
        )
    }
}

// const AddExercise = (props) => {
//     return (
//         <form onSubmit={props.handleAddExercise}>
//             <input type='text' name='exercio'/>
//             <button>Add Exercise</button>
//         </form>
//     )
// }

let appRoot = document.getElementById('app');

ReactDOM.render(<WorkoutApp />, appRoot);