import React from 'react';
import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from '../actions/CounterActions'

class Counter extends React.Component {

    render() {
        return (
            <p>
                <button onClick={this.props.decrementCounter}>-</button>
                {this.props.counter}
                <button onClick={this.props.incrementCounter}>+</button>
            </p>
        )
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counterReducer.counter
    }
}

export default connect(mapStateToProps, {
    incrementCounter,
    decrementCounter
})(Counter)