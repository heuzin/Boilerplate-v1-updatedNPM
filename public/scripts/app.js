'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WorkoutApp = function (_React$Component) {
    _inherits(WorkoutApp, _React$Component);

    function WorkoutApp(props) {
        _classCallCheck(this, WorkoutApp);

        var _this = _possibleConstructorReturn(this, (WorkoutApp.__proto__ || Object.getPrototypeOf(WorkoutApp)).call(this, props));

        _this.handleAddExercise = _this.handleAddExercise.bind(_this);
        _this.handleDeleteAll = _this.handleDeleteAll.bind(_this);
        _this.handleDeleteExercise = _this.handleDeleteExercise.bind(_this);
        _this.state = {
            exercise: []
        };
        return _this;
    }

    _createClass(WorkoutApp, [{
        key: 'handleAddExercise',
        value: function handleAddExercise(exerciseText) {
            if (!exerciseText) {
                return 'Enter valid exercise name.';
            } else if (this.state.exercise.indexOf(exerciseText) > -1) {
                return 'That exercise already exists.';
            }

            this.setState(function (prevState) {
                return {
                    exercise: prevState.exercise.concat(exerciseText)
                };
            });
        }
    }, {
        key: 'handleDeleteAll',
        value: function handleDeleteAll() {
            this.setState(function () {
                return {
                    exercise: []
                };
            });
        }
    }, {
        key: 'handleDeleteExercise',
        value: function handleDeleteExercise(toRemove) {
            this.setState(function (prevState) {
                return {
                    exercise: prevState.exercise.filter(function (exercise) {
                        return toRemove !== exercise;
                    })
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'Workout app';
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title }),
                React.createElement(Exercises, { exercise: this.state.exercise, handleDeleteAll: this.handleDeleteAll, handleDeleteExercise: this.handleDeleteExercise }),
                React.createElement(AddExercise, { handleAddExercise: this.handleAddExercise })
            );
        }
    }]);

    return WorkoutApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'h1',
        null,
        props.title
    );
};

var Exercises = function Exercises(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteAll },
            'Remove All'
        ),
        props.exercise.map(function (exerciseName) {
            return React.createElement(ExerciseName, { handleDeleteExercise: props.handleDeleteExercise, key: exerciseName, exerciseText: exerciseName });
        })
    );
};

var ExerciseName = function ExerciseName(props) {
    return React.createElement(
        'div',
        null,
        props.exerciseText,
        React.createElement(
            'button',
            { onClick: function onClick() {
                    props.handleDeleteExercise(props.exerciseText);
                } },
            'Remove'
        )
    );
};

var AddExercise = function (_React$Component2) {
    _inherits(AddExercise, _React$Component2);

    function AddExercise(props) {
        _classCallCheck(this, AddExercise);

        var _this2 = _possibleConstructorReturn(this, (AddExercise.__proto__ || Object.getPrototypeOf(AddExercise)).call(this, props));

        _this2.handleAddExercise = _this2.handleAddExercise.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddExercise, [{
        key: 'handleAddExercise',
        value: function handleAddExercise(e) {
            e.preventDefault();
            console.log('testing');

            var exerciseText = e.target.elements.exercio.value.trim();
            var error = this.props.handleAddExercise(exerciseText);

            this.setState(function () {
                return { error: error };
            });

            if (!error) {
                e.target.elements.exercio.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddExercise },
                    React.createElement('input', { type: 'text', name: 'exercio' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Exercise'
                    )
                )
            );
        }
    }]);

    return AddExercise;
}(React.Component);

// const AddExercise = (props) => {
//     return (
//         <form onSubmit={props.handleAddExercise}>
//             <input type='text' name='exercio'/>
//             <button>Add Exercise</button>
//         </form>
//     )
// }

var appRoot = document.getElementById('app');

ReactDOM.render(React.createElement(WorkoutApp, null), appRoot);
