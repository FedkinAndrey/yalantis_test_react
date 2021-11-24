import {ListAction, ListActionTypes, ListState} from "../../types/list";

const initialState: ListState = {
  usersList: [],
};

export const listReducer = (
  state = initialState,
  action: ListAction
): ListState => {
  switch (action.type) {
    case ListActionTypes.ADD_USER: {
      const newItems = {...state};
      newItems.usersList = [...state.usersList];

      const newUser = state.usersList.find(
        (user) => user.id === action.payload.id
      );

      if (newUser === undefined) {
        action.payload.active = true
        newItems.usersList.push(action.payload);
        return {
          ...newItems,
          usersList: newItems.usersList,
        };
      } else {
        return state;
      }
    }
    case ListActionTypes.REMOVE_USER: {
      action.payload.active = false
      const newItems = {...state};
      newItems.usersList = [...state.usersList];

      const filteredArray = newItems.usersList.filter(
        (item) => item.id !== action.payload.id
      );

      return {...state, usersList: filteredArray};
    }
    default:
      return state;
  }
};
