const animalTypestableBlock = document.getElementById('animalTypes');
const Table = document.getElementById('Table');
const BASE_URL = 'http://localhost:3000/';


// Справочник полей таблиц, наименований и типов полей

const TabelFieldsList = {
  Animal_Type : {
    fields: ['name'],
    labels: ['Вид животного'],
    types: ['string'] 
  },
  Breed : {
    fields: ['name', 'id_animal_type'],
    labels: ['Порода', 'Вид животного'],
    types: ['string', ''] 
  },
  Pet : {
    fields: ['id_breed', 'name', 'color', 'sex', 'birth_date', 'death_date'],
    labels: ['Порода', 'Кличка', 'Расцветка', 'Пол', 'Дата рождения', 'Дата смерти']
  },
  Pet_Person : {
    fields: ['id_pet', 'id_person', 'ownership_start_date', 'ownership_end_date'],
    labels: ['Идентификатор питомца', 'Идентификатор владельца', 'Дата начала владения', 'Дата окончания владения']
  },
  Person : {
    fields: ['first_name', 'surname', 'last_name', 'login', 'password'],
    labels: ['Фамилия', 'Имя', 'Отчество', 'Логин', 'Пароль']
  },
  Insurance : {
    fields: ['id_pet_person', 'id_insurance_package', 'date_start', 'date_end'],
    labels: ['Пара владелец-питомец', 'Идентификатор страхового пакета', 'Дата начала страховки', 'Дата окончания страховки']
  },
  Insurance_Package : {
    fields: ['name', 'base_cost', 'create_date', 'death_date'],
    labels: ['Название', 'Стоимость', 'Дата создания', 'Дата завершения']
  },
  Service : {
    fields: ['name', 'deprecated'],
    labels: ['Наименование услуги', 'Признак устаревшести']
  }
}


//Инициализация вкладок
for(a = 0; a < Object.keys(TabelFieldsList).length; a++){
  document.getElementById(Object.keys(TabelFieldsList)[a] + '_Tab').addEventListener('click', (event) => {
    for(b = 0; b < Object.keys(TabelFieldsList).length; b++){
      if(document.getElementById(Object.keys(TabelFieldsList)[b] + '_Tab').id == event.target.id){
        event.target.setAttribute('class', 'tab_active');
        document.getElementById(Object.keys(TabelFieldsList)[b]).setAttribute('class', 'table_active');
      } else {
        document.getElementById(Object.keys(TabelFieldsList)[b] + '_Tab').setAttribute('class', 'tab_inactive');
        document.getElementById(Object.keys(TabelFieldsList)[b]).setAttribute('class', 'table_inactive');
      }
    }
  })
}

// вызовы функций генерации таблиц

getContent('Animal_Type', generateTable);
getContent('Breed', generateTable);

function getContent(tableName, callFunction){
  fetch(BASE_URL + tableName, {method: 'GET'})
  .then(res => res.json())
  .then(json => callFunction(tableName, json));
}

function postContent(tableName, data, callFunction){
  fetch(BASE_URL + tableName, {
    method: 'POST',
    body: data
  })
  .then(res => res.json())
  .then(json => callFunction(json));
}

// функция отправки запроса на сервер
function sendNahoi(){

}

// объявление функции генерации таблиц
function generateTable(tableName, json){

  // const animalTypeList = [{id: 1, name: 'wawa'}, {id: 2, name: 'baka'}]

  // for (const amam of animalTypeList) {
  //   const callback = () => {
  //     const id = amam.id;
  //     ///
  //   };
  //   button.click = callback;
  // }

  // const tableBlock = document.createElement('div');
  const tableBlock = document.getElementById(tableName);
  const tableLable = document.createElement('div');
  const table = document.createElement('table');
  const tableTd = document.createElement('td');
  const addButton = document.createElement('button')

  document.body.insertAdjacentElement('beforeend', tableBlock);
  
  tableBlock.insertAdjacentElement('afterbegin', table);
  tableBlock.insertAdjacentElement('afterbegin', tableLable);
  const tableTr = document.createElement('tr');
  table.prepend(tableTr);

  for(i = 0; i < TabelFieldsList[tableName].fields.length; i++){
    const tableTh = document.createElement('th');

    tableTr.insertAdjacentElement('beforeend', tableTh);
    // tableTh.innerText = (TabelFieldsList[tableName].labels[i]);
    // console.log(TabelFieldsList[tableName].labels[i]);
  }

  for(j = 0; j < json[tableName].length; j++){
    const rows = document.createElement('tr');
    const editButton = document.createElement('button');
    const delButton = document.createElement('button');
    table.append(rows);

    for(k = 0; k < TabelFieldsList[tableName].fields.length; k++){
      const cell = document.createElement('td');
      rows.append(cell);
      cell.innerText = json[tableName][j][TabelFieldsList[tableName].fields[k]];  
    }
    rows.append(editButton);
    editButton.innerText = 'Редактировать';
    rows.append(delButton);
    delButton.innerText = 'Удалить';
  }
  // tableBlock.insertAdjacentElement('beforeend', addButton);
  // addButton.innerText = 'Добавить запись';
}



