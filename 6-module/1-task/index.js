/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {

  constructor(rows) {
    this.data = rows;
    this.elem = document.createElement('table');
    this.reloadTableRows();
    this.elem.onclick = this.deleteRow.bind(this);
  }
  
   createRows(rows) {
     const result = rows.map(row => {
       return `
       <tr>
          <td>${row.name}</td>
          <td>${row.age}</td>
          <td>${row.salary}</td>
          <td>${row.city}</td>
          <td><button>X</button></td>
        </tr>`
     });
     return result.join('');
   }

   reloadTableRows() {
    this.elem.innerHTML = `
    <thead>
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      ${this.createRows(this.data)}
    </tbody>`;
   }

   deleteRow(event) {
    const target = event.target; 
    if (target.tagName != 'BUTTON') return; 
    const index = target.closest('tr').rowIndex;
  
    this.data.splice(index - 1, 1);
    this.reloadTableRows();
   }
}