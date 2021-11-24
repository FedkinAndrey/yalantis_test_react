import { IUser } from "./types";

export interface ListState {
  usersList: IUser[];
}

export enum ListActionTypes {
  ADD_USER = "ADD_USER",
  REMOVE_USER = "REMOVE_USER",
}

interface AddUserAction {
  type: ListActionTypes.ADD_USER;
  payload: IUser;
}

interface RemoveUserAction {
  type: ListActionTypes.REMOVE_USER;
  payload: IUser;
}

export type ListAction = AddUserAction | RemoveUserAction;
