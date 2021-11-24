import React, { FC } from "react";
import { filteredUsersByAlphabet } from "../api/API";
import { IUser } from "../types/types";
import UserItem from "./UserItem";

interface UserListProps {
  letter: string;
  employees: IUser[];
  activeUsers: string[];
}

const UserList: FC<UserListProps> = ({ letter, employees, activeUsers }) => {
  const arr = filteredUsersByAlphabet(letter, employees);

  return (
    <div className="container">
      <h3>{letter}</h3>
      {arr.length !== 0 ? (
        arr.map((user) => (
          <UserItem key={user.id} user={user} activeUsers={activeUsers} />
        ))
      ) : (
        <div className="userItem">No Employees</div>
      )}
    </div>
  );
};

export default UserList;
