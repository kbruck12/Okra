import {combineReducers, createStore} from "react";

export default () => {
    const reducer = combineReducers({

    });
    const store = createStore(reducer);
    return {store}
}