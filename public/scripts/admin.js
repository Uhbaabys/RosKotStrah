const animalTypestableBlock = document.getElementById('animalTypes');
const Table = document.getElementById('Table');
const BASE_URL = 'http://localhost:3000/';

// Справочник полей таблиц, наименований и типов полей

const TabelFieldsList = {
  animal_type : {
    fields: ['name'],
    labels: ['Вид животного'],
    types: ['string'] 
  },
  breeds : {
    fields: ['name', 'id_animal_type'],
    labels: ['Порода', 'Вид животного'],
    types: ['string', ''] 
  },
  pets : {
    fields: ['id_breed', 'name', 'color', 'sex', 'birth_date', 'death_date'],
    labels: ['Порода', 'Кличка', 'Расцветка', 'Пол', 'Дата рождения', 'Дата смерти']
  },
  pet_persons : {
    fields: ['id_pet', 'id_person', 'ownership_start_date', 'ownership_end_date'],
    labels: ['Идентификатор питомца', 'Идентификатор владельца', 'Дата начала владения', 'Дата окончания владения']
  },
  persons : {
    fields: ['first_name', 'surname', 'last_name', 'login', 'password'],
    labels: ['Фамилия', 'Имя', 'Отчество', 'Логин', 'Пароль']
  },
  insurances : {
    fields: ['id_pet_person', 'id_insurance_package', 'date_start', 'date_end'],
    labels: ['Пара владелец-питомец', 'Идентификатор страхового пакета', 'Дата начала страховки', 'Дата окончания страховки']
  },
  insurance_packages : {
    fields: ['name', 'base_cost', 'create_date', 'death_date'],
    labels: ['Название', 'Стоимость', 'Дата создания', 'Дата завершения']
  },
  services : {
    fields: ['name', 'deprecated'],
    labels: ['Наименование услуги', 'ПРизнак устаревшести']
  }
}

// вызовы функций генерации таблиц
getContent('animal_type', generateTable);

function getContent(tableName, callFunction){
  fetch(BASE_URL + tableName, {method: 'GET'})
  .then(res => res.json())
  .then(json => callFunction(tableName, json));
}

// функция отправки запроса на сервер
function sendNahoi(){

}


// function addAnimalTypeTable(json){

//   // if (Object.keys(json) == 'animalTypes'){

//   //   console.log('Alex petuh');
//   // }

//   switch (Object.keys(json)[0]){
//     case 'animalTypes':
//       console.log('Chivapchich');
//       break;
//     default:
//       console.log('Khe-khe');
//   }
  
//   const tableTr = document.createElement('tr');
//   const tableTh = document.createElement('th');
//   Table.insertAdjacentElement('beforeend', tableTr);
//   tableTr.insertAdjacentElement('beforeend', tableTh);
//   tableTr.insertAdjacentElement('beforeend', tableTh);
//   tableTr.insertAdjacentElement('beforeend', tableTh);

//   for(i = 0; i<json.animalTypes.length; i++){

//     const jsonElements = Object.keys(json.animalTypes[i]);
//     // console.log(jsonElements);
//     // console.log(json.animalTypes);
//     console.log(Object.keys(json));
//     // console.log(json.animalTypes[i]);

//     const tabelRows = document.createElement('tr');
//     const tabelColumns = document.createElement('td');
//     const tableColumnsEditButon = document.createElement('td');
//     const tableColumnsDeleteButton = document.createElement('td');

//     const editButton = document.createElement('button');
//     const deleteButton = document.createElement('button');

//     // Необходима динамическая генерация таблицы и генерация наименований таблиц и столбцов
//     Table.insertAdjacentElement('beforeend', tabelRows);
    
//     for(x = 0; x<jsonElements.length; x++){
//       tabelRows.insertAdjacentElement('beforeend', tabelColumns);
//       tabelColumns.innerHTML = json.animalTypes[i].name;
//     }

//     // tabelColumns.setAttribute('width', '70%');
//     tabelRows.insertAdjacentElement('beforeend', tableColumnsEditButon);
//     tabelRows.insertAdjacentElement('beforeend', tableColumnsDeleteButton);

  

//     tableColumnsEditButon.insertAdjacentElement('beforeend', editButton);
//     tableColumnsDeleteButton.insertAdjacentElement('beforeend', deleteButton);

//     editButton.innerText = 'Редактировать';
//     deleteButton.innerText = 'Удалить';
//   }

//   const addButton = document.createElement('button');
//   addButton.setAttribute('id', 'addBtn');
//   addButton.style.marginTop = '5px';
//   animalTypestableBlock.insertAdjacentElement('beforeend', addButton);
//   addButton.innerText = 'Добавить элемент';
// }

// объявление функции генерации таблиц
function generateTable(tableName, json){

  const ArrTableName = Object.keys(TabelFieldsList);
  console.log(ArrTableName);
  switch (tableName){
    case 'animal_type':
      const tableFields = TabelFieldsList.animal_type;
      console.log('chivapchich');
      break;
  }

  // console.log(tableName);
  if (ArrTableName[i] == tableName){
    // console.log(ArrTableName[i]);
    const tableBlock = document.createElement('div');
    const tableLable = document.createElement('div');
    const table = document.createElement('table');
    const tableTh = document.createElement('th');
    const tableTr = document.createElement('tr');
    const tableTd = document.createElement('td');

    document.body.insertAdjacentElement('beforeend', tableBlock);
    tableBlock.insertAdjacentElement('afterbegin', tableLable);
    tableBlock.insertAdjacentElement('beforeend', table);
    table.prepend(tableTr);
    }
  }