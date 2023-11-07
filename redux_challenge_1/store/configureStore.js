import lessonReducer from "./lesson.js";
import studentReducer from "./student.js";

const reducer = Redux.combineReducers({ lessonReducer, studentReducer });
const store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
