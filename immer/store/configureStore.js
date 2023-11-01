import count from "./count.js";
import person from "./person.js";

const reducer = Redux.combineReducers({ count, person });

const store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
