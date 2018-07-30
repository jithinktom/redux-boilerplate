const defaultState = {
    counter : 0
}

export default (state = defaultState, action = {}) => {
    switch (action.type) {
        case 'INCREMENT_COUNTER_FULFILLED': {
            return {
                ...state,
                counter: ++(state.counter)
            }
        }

        case 'DECREMENT_COUNTER_FULFILLED': {
            return {
                ...state,
                counter: --(state.counter)
            }
        }

        default:
            return state;
    }
}