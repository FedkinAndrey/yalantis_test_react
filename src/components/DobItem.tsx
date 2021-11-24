import React, {FC} from 'react';
import {IUser} from "../types/types";

interface DobItemProps {
  month: string;
  user: IUser;
}

const DobItem:FC<DobItemProps> = ({month, user}) => {
  const date = new Date(user.dob)

  return (
    <div>
      {user.firstName} {user.lastName} - {date.getDate()} {month}, {date.getFullYear()} year
    </div>
  );
};

export default DobItem;
