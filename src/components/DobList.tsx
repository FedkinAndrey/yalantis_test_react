import React, { FC } from "react";
import { filteredUserByMonth } from "../api/API";
import { IUser } from "../types/types";
import DobItem from "./DobItem";

interface DobListProps {
  month: string;
  monthId: number;
  employees: IUser[];
}

const DobList: FC<DobListProps> = ({ month, monthId, employees }) => {
  const filteredUsers = filteredUserByMonth(monthId, employees);

  return (
    <div className="container">
      <h3>{month}</h3>
      <ul>
        {filteredUsers.length !== 0
          ? filteredUsers.map((user) => (
              <li key={user.id}>
                <DobItem user={user} month={month} />
              </li>
            ))
          : "No Employees"}
      </ul>
    </div>
  );
};

export default DobList;
