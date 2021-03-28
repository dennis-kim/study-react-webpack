import * as CounterAction from '../action';

const initialState = {
    number: 0,
    diff: 1
}

export default function counterReducer(state = initialState, action) {
    switch (action.type) {
      case CounterAction.SET_DIFF:
        return {
          ...state,
          diff: action.diff
        };
      case CounterAction.INCREASE:
        return {
          ...state,
          number: state.number + state.diff
        };
      case CounterAction.DECREASE:
        return {
          ...state,
          number: state.number - state.diff
        };
      default:
        return state;
    }
}