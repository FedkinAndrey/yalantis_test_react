import axios from "axios";
import { Dispatch } from "redux";
import { IUser } from "../../types/types";
import { UserAction, UserActionTypes } from "../../types/user";

export const fetchEmployees = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.get<IUser[]>(
        "https://yalantis-react-school-api.yalantis.com/api/task0/users"
      );
      setTimeout(() => {
        dispatch({
            type: UserActionTypes.FETCH_USERS_SUCCESS,
            payload: response.data
          });
      }, 500);
    
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: "ERROR",
      });
    }
  };
};
