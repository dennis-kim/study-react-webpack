import * as BoardAction from '../action';

const initialState = {
  boardId: 0,
}

export default function boardReducer(state = initialState, action) {
    switch (action.type) {
      case BoardAction.BOARD_ID:
        return {
          ...state,
          boardId: action.boardId
        };
      default:
        return state;
    }
}