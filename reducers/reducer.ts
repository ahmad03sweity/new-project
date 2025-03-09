interface State {
    count: number;
}

interface IncrementAction {
    type: 'INCREMENT';
}

interface DecrementAction {
    type: 'DECREMENT';
}

type Action = IncrementAction | DecrementAction;

const initialState: State = {
    count: 0,
};

const reducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};

export default reducer;