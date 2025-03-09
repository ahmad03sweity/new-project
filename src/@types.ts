interface IState {
    counter: number;
}

interface IAction {
    type: 'increment' | 'decrement' | 'reset' | 'set-value';
    payload?: number;
}