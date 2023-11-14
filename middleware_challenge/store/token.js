import getLocalStorage from "./helper/getLocalStorage.js";

export const INITFETCH = "FETCH_STARTED";
export const SUCCESSFETCH = "FETCH_SUCCESS";
export const ERRORFETCH = "FETCH_ERROR";

export const tokenFetchStarted = () => ({ type: INITFETCH });
export const tokenFetchSuccess = (payload) => ({
  type: SUCCESSFETCH,
  payload,
  localStorage: "token",
});
export const tokenFetchError = (payload) => ({
  type: ERRORFETCH,
  payload,
});

export const tokenFetch = (body) => async (dispatch) => {
  try {
    dispatch(tokenFetchStarted());
    const response = await fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const { token } = await response.json();
    dispatch(tokenFetchSuccess(token));
  } catch (error) {
    dispatch(tokenFetchError(error.message));
  }
};

const token = immer.produce(
  (state, action) => {
    switch (action.type) {
      case INITFETCH:
        state.loading = true;
        break;
      case SUCCESSFETCH:
        state.loading = false;
        state.error = null;
        state.data = action.payload;
        break;
      case ERRORFETCH:
        state.loading = false;
        state.error = action.payload;
        state.data = null;
        break;
    }
  },
  { loading: false, data: getLocalStorage("token", null), error: null }
);

export default token;
