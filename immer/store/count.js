const ADD = "count/ADD";
const REMOVE = "count/REMOVE";

export const add = () => ({ type: ADD });
export const remove = () => ({ type: REMOVE });

const initialState = 0;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return ++state;
    case REMOVE:
      return --state;
    default:
      return state;
  }
};

export default reducer;
