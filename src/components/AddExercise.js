import React from 'react';

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

export default AddExercise;