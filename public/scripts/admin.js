const animalTypesBLock = document.getElementById('animalTypes');
const animalTypesTable = document.getElementById('animalTypesTable');

fetch('http://localhost:3000/animal_type', { method: 'GET' })
  .then(res => res.json())
  .then(json => addElement(json));

function addElement(json){
  // const animalTypesTable = document.createElement('table');
  // animalTypesBLock.insertAdjacentElement('beforeend', document.createElement('table'));


  for(i = 0; i<json.animalTypes.length; i++){
    console.log(json.animalTypes[i])

    // const creatDiv = document.createElement('div');
    // creatDiv.innerHTML = json.animalTypes[i].name;
    // document.body.append(creatDiv);
    const tabelRows = document.createElement('tr');
    const tabelColumnsName = document.createElement('td');
    const tableColumnsEditButon = document.createElement('td');
    const tableColumnsDeleteButton = document.createElement('td');

    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    animalTypesTable.insertAdjacentElement('beforeend', tabelRows);
    tabelRows.insertAdjacentElement('beforeend', tabelColumnsName);
    tabelColumnsName.setAttribute('width', '70%');
    tabelRows.insertAdjacentElement('beforeend', tableColumnsEditButon);
    tabelRows.insertAdjacentElement('beforeend', tableColumnsDeleteButton);

    tabelColumnsName.innerHTML = json.animalTypes[i].name;

    tableColumnsEditButon.insertAdjacentElement('beforeend', editButton);
    tableColumnsDeleteButton.insertAdjacentElement('beforeend', deleteButton);

    editButton.innerText = 'Редактировать';
    deleteButton.innerText = 'Удалить';

  }

  const addButton = document.createElement('button');
  addButton.setAttribute('id', 'addBtn');
  addButton.style.marginTop = '5px';
  animalTypesBLock.insertAdjacentElement('beforeend', addButton);
  addButton.innerText = 'Добавить элемент';
}