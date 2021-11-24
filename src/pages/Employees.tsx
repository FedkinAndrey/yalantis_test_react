import React, { useEffect } from "react";
import UserList from "../components/UserList";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useAction";
import DobList from "../components/DobList";
import { convertCalendar } from "../api/API";

const Employees = React.memo(() => {
  const alphabet: string[] = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const year = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const { fetchEmployees } = useActions();
  const { users } = useTypedSelector((state) => state.user);
  const { usersList } = useTypedSelector((state) => state.list);
  const actualCalendar = convertCalendar(new Date, year)

  useEffect(() => {
    fetchEmployees();
  }, []);

  const idArray: string[] = usersList.map((item) => item.id);

  return (
    <div className="wrapper">
      <div className="left">
        <h2>Employees</h2>
        <div className="left__container">
          {users.length !== 0
            ? alphabet.map((item, id) => (
                <UserList
                  letter={item}
                  employees={users}
                  activeUsers={idArray}
                  key={id}
                />
              ))
            : "Empty"}
        </div>
      </div>

      <div className="right">
        <h2>Employees birthday</h2>
        <div className="right__container">
          {usersList.length !== 0
            ? actualCalendar.map((item, id) => (
                <DobList
                  month={item}
                  monthId={id}
                  employees={usersList}
                  key={id}
                />
              ))
            : "Employees List is empty"}
        </div>
      </div>
    </div>
  );
});

export default Employees;
