const CHANGE_NAME = "PERSON/CHANGE_NAME";
const CHANGE_AGE = "PERSON/CHANGE_AGE";

export const changeName = (name) => ({ type: CHANGE_NAME, payload: name });
export const changeAge = (age) => ({ type: CHANGE_AGE, payload: age });

const reducer = immer.produce(
  (state, action) => {
    switch (action.type) {
      case CHANGE_NAME:
        state.name = action.payload;
        break;
      case CHANGE_AGE:
        state.age = action.payload;
        break;
    }
  },
  { name: "Bruno", age: 27 }
);

export default reducer;
