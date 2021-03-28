import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './container/counter/reducer';
import boardReducer from './container/board/reducer';
import Root from "./Root";
import Counter from "./container/counter/Counter";

const rootReducer = combineReducers({
    counter: counterReducer,
    board: boardReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(

<Provider store={store}>
    <Counter />
</Provider>
, document.getElementById("root"));