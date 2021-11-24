import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./reducers";
import {loadState} from "./browser-storage";


const persistedState = loadState()

export const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));
