import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contador from "./contador";
import modal from "./modal";
import logger from "./middleware/logger";

const mid = getDefaultMiddleware();
const middleware = [...mid, logger];

const reducer = combineReducers({ contador, modal });
const store = configureStore({ reducer, middleware });

export default store;
