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
        _this.handleDeleteExercise = _this.handleDeleteExercise.bind(_this);
        _this.state = {
            exercise: []
        };
        return _this;
    }

    _createClass(WorkoutApp, [{
        key: 'handleAddExercise',
        value: function handleAddExercise(e) {
            e.preventDefault();

            var exercise = e.target.elements.exercio.value.trim();

            this.setState(function (prevState) {
                return {
                    exercise: prevState.exercise.concat(exercise)
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
                React.createElement(Exercises, { exercise: this.state.exercise, handleDeleteExercise: this.handleDeleteExercise }),
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

var AddExercise = function AddExercise(props) {
    return React.createElement(
        'form',
        { onSubmit: props.handleAddExercise },
        React.createElement('input', { type: 'text', name: 'exercio' }),
        React.createElement(
            'button',
            null,
            'Add Exercise'
        )
    );
};

var appRoot = document.getElementById('app');

ReactDOM.render(React.createElement(WorkoutApp, null), appRoot);
