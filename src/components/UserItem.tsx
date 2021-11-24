import React, { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import { useActions } from "../hooks/useAction";

interface UserItemProps {
  user: IUser;
  activeUsers: string[];
}

const UserItem: FC<UserItemProps> = ({ user, activeUsers }) => {
  const [state, setstate] = useState("false");

  const checkId = (arr: string[], id: string): boolean => {
    const checked = arr.includes(id);
    return checked;
  };

  useEffect(() => {
    if (checkId(activeUsers, user.id)) {
      setstate("true");
    } else {
      setstate("false");
    }
  }, [activeUsers]);

  const { addUsers } = useActions();
  const { removeUsers } = useActions();

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setstate(event.target.value);
    if (event.target.value === "false") {
      removeUsers(user);
    } else {
      addUsers(user);
    }
  };

  return (
    <div className="userItem">
      <div className={state === "true" ? "name active" : "name"}>
        <span>
          {user.firstName} {user.lastName}
        </span>
      </div>
      <div>
        <div>
          <label>
            <input
              type="radio"
              value="false"
              checked={state === "false"}
              onChange={handleOptionChange}
            />
            not active
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="true"
              checked={state === "true"}
              onChange={handleOptionChange}
            />
            active
          </label>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
