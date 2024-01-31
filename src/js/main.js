import data from '../db.json';
import {
  setUsersToLocalStorage,
  getUsersFromLocalStorage,
  sortUsersFromLocalStorage,
  addUserToLocalStorage,
  deleteUserFromLocalStorage,
  displayUsersFromLocalStorage,
} from './localStorage';
import { displayData, formDataToObject } from './helpers';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const body = document.body;

  const users = getUsersFromLocalStorage();
  if (users.length === 0) {
    setUsersToLocalStorage(data);
    displayUsersFromLocalStorage();
  } else {
    displayData(users);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;

    addUser(form);
    form.reset();
  });

  body.addEventListener('click', (e) => {
    const deleteBtn = e.target.closest('.delete-btn');
    const sortBtn = e.target.closest('.sort-btn');

    if (sortBtn) {
      const sortBy = sortBtn.dataset.sortBy;
      sortUsers(sortBy);
    }

    if (deleteBtn) {
      const id = deleteBtn.closest('tr').dataset.id;
      deleteUser(id);
    }
  });
});

//
function sortUsers(sortBy) {
  sortUsersFromLocalStorage(sortBy);
  displayUsersFromLocalStorage();
}

function deleteUser(id) {
  deleteUserFromLocalStorage(id);
  displayUsersFromLocalStorage();
}

function addUser(form) {
  const object = formDataToObject(form);
  addUserToLocalStorage(object);
  displayUsersFromLocalStorage();
}
