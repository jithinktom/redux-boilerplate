

export const pendingFn = (action) => (dispatch) => {
    return dispatch({
        type: action
    });
}

export const successFn = (action, payload) => (dispatch) => {
    dispatch({
        type: action,
        payload
    });
}

export const failureFn = (action, error) => (dispatch) => {
    dispatch({
        type: action,
        payload: error
    });
}

export const incrementCounter = () => (dispatch) => {
    dispatch(successFn('INCREMENT_COUNTER_FULFILLED'));
}

export const decrementCounter = () => (dispatch) => {
    dispatch(successFn('DECREMENT_COUNTER_FULFILLED'));
}