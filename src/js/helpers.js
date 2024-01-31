export const displayData = (data) => {
  const table = document.querySelector('.table tbody');
  table.innerHTML = '';

  data.forEach((item) => {
    table.innerHTML += `
                <tr data-id="${item.id}">
                    <td>${item.firstName}</td>
                    <td>${item.lastName}</td>
                    <td>${item.age}</td>
                    <td><button class="delete-btn">Delete</td>
                </tr>
            `;
  });
};

export const sortData = (data, sortBy) => {
  return data.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return -1;
    }
    if (a[sortBy] > b[sortBy]) {
      return 1;
    }
    return 0;
  });
};

export const formDataToObject = (form) => {
  var object = {};

  const dataForm = new FormData(form);
  dataForm.append('id', Date.now());
  dataForm.forEach((value, key) => (object[key] = value));

  return object;
};
