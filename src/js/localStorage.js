import { displayData, sortData } from './helpers';
export const setUsersToLocalStorage = (data) => {
  localStorage.setItem('data', JSON.stringify(data));
};

export const getUsersFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('data')) || [];
};

export const addUserToLocalStorage = (item) => {
  const data = JSON.parse(localStorage.getItem('data'));
  data.push(item);
  localStorage.setItem('data', JSON.stringify(data));
};

export const deleteUserFromLocalStorage = (id) => {
  const data = JSON.parse(localStorage.getItem('data'));
  const filteredData = data.filter((item) => item.id != id);
  localStorage.setItem('data', JSON.stringify(filteredData));
};

export const sortUsersFromLocalStorage = (sortBy) => {
  const data = JSON.parse(localStorage.getItem('data'));
  const sortedData = sortData(data, sortBy);
  localStorage.setItem('data', JSON.stringify(sortedData));
};

export const displayUsersFromLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem('data'));
  displayData(data);
};
