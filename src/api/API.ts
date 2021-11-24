import { IUser } from "../types/types";

export const convertCalendar = (month: Date, year: string[]) => {
  return year.slice(month.getMonth()).concat(year.slice(0, month.getMonth()));
};

export const filteredUsersByAlphabet = (
  letter: string,
  arr: IUser[]
): IUser[] => {
  const newArr = arr.filter((item) => {
    return item.lastName.startsWith(letter);
  });
  return newArr.sort(function (a, b) {
    return a.firstName.localeCompare(b.firstName);
  });
};

export const filteredUserByMonth = (monthId: number, arr: IUser[]): IUser[] => {
  const newArr = arr.filter((item) => {
    return new Date(item.dob).getMonth() === monthId;
  });

  return newArr.sort(function (a, b) {
    return a.lastName.localeCompare(b.lastName);
  });
};
