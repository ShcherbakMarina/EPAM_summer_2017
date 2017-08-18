var students = [];
students.push(new Student('Ivanov I.M.', 12, 10, '-', 6, '-'), new Student('Petrov A.E.', '-', 10, 11, '-', 11));

var body = document.body;
var table = document.createElement('table');
var tHeader = document.createElement('tr');
var headerCells = [];
var tableRows = [];
var tableCells = [];

body.appendChild(table);
table.appendChild(tHeader);

for (var i = 0; i < 6; i++) {
  headerCells[i] = document.createElement('th');
}

tHeader.appendChild(headerCells[0]).innerHTML = 'Full name';
tHeader.appendChild(headerCells[1]).innerHTML = 'Math';
tHeader.appendChild(headerCells[2]).innerHTML = 'Physics';
tHeader.appendChild(headerCells[3]).innerHTML = 'Biology';
tHeader.appendChild(headerCells[4]).innerHTML = 'Chemistry';
tHeader.appendChild(headerCells[5]).innerHTML = 'Paint';

for (i = 0; i < students.length; i++) {
  tableRows[i] = document.createElement('tr');
  table.appendChild(tableRows[i]);
  for (key in students[i]) {
    tableCells[key] = document.createElement('td');
    tableRows[i].appendChild(tableCells[key]);
    tableCells[key].innerHTML = students[i][key];
  }
}

function Student(fullName, math, physics, biology, chemistry, paint) {
  this.fullName = fullName;
  this.math = math;
  this.physics = physics;
  this.biology = biology;
  this.chemistry = chemistry;
  this.paint = paint;
}
