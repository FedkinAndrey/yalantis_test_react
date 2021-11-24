import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import {listReducer} from "./listDobReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  list: listReducer
});

export type RootState = ReturnType<typeof rootReducer>;
