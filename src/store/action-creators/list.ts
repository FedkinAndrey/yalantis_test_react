import {Dispatch} from "redux";
import {ListAction, ListActionTypes} from "../../types/list";
import {IUser} from "../../types/types";

export const addUsers = (user: IUser) => {
  return (dispatch: Dispatch<ListAction>) => {
    dispatch({
      type: ListActionTypes.ADD_USER,
      payload: user
    });
  }
}

export const removeUsers = (user: IUser) => {
  return (dispatch: Dispatch<ListAction>) => {
    dispatch({
      type: ListActionTypes.REMOVE_USER,
      payload: user
    });
  }
}
