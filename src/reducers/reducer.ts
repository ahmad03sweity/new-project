import './reduser.css';

const reducer = (state:any, action:any) => {
    switch (action.type) {
        case 'increment':
            //like youre doing a setState in class component
            return { counter: state.counter + 1 };
        case 'decrement':
            return { counter: state.counter - 1 };
        case 'reset':
            return { counter: 0 };
        case 'set-value':
            return { counter: action.payload };
        default:{
            console.error('Invalid action type: '+action.type);
            return state;
        }
    }
};

export default reducer;
