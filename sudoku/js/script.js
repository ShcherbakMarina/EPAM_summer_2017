//easy
// var example = [
//   [0,0,0,4,0,0,0,9,1],
//   [0,0,0,0,0,7,0,6,5],
//   [0,0,9,0,3,0,8,0,2],
//   [2,0,0,5,0,0,0,0,0],
//   [7,6,0,0,0,0,0,2,8],
//   [0,0,0,0,0,3,0,0,4],
//   [1,0,5,0,2,0,7,0,0],
//   [4,9,0,1,0,0,0,0,0],
//   [6,3,0,0,0,8,0,0,0]
// ];

//normal
// var example = [
//   [0,0,4,5,0,9,3,0,0],
//   [0,5,0,0,0,6,9,7,0],
//   [9,7,0,0,1,0,0,0,8],
//   [5,1,0,0,9,0,0,0,4],
//   [0,0,8,6,0,2,1,0,0],
//   [6,0,0,0,4,0,0,3,7],
//   [2,0,0,0,5,0,0,4,3],
//   [0,9,7,3,0,0,0,1,0],
//   [0,0,5,7,0,1,6,0,0]
// ];

//normal
var example = [
  [0,2,0,1,0,5,0,0,0],
  [0,8,3,2,9,0,0,0,0],
  [1,0,5,0,0,6,7,0,3],
  [0,1,0,0,0,0,0,8,4],
  [3,0,7,4,0,8,9,0,2],
  [8,5,0,0,0,0,0,6,0],
  [6,0,1,3,0,0,2,0,5],
  [0,0,0,0,6,2,4,3,0],
  [0,0,0,7,0,4,0,9,0]
];

//не может решить
//very hard
// var example = [
//   [5,3,0,0,0,9,0,2,0],
//   [8,0,0,0,1,0,0,0,0],
//   [0,0,0,7,0,0,4,0,3],
//   [0,7,0,0,0,0,5,0,9],
//   [0,2,0,3,0,6,0,5,0],
//   [1,0,5,0,0,0,0,8,0],
//   [6,0,2,0,0,7,0,0,0],
//   [0,0,0,0,3,0,0,0,4],
//   [0,5,0,8,0,0,0,7,6]
// ];

//very hard
// var example = [
//   [0,0,3,0,0,8,2,0,4],
//   [0,2,0,0,6,4,0,1,0],
//   [9,0,0,0,0,0,0,0,8],
//   [0,8,0,0,0,0,0,0,0],
//   [0,0,0,0,0,6,9,8,0],
//   [0,0,0,0,0,0,5,0,0],
//   [0,0,4,9,0,7,0,3,0],
//   [8,0,0,0,0,1,0,0,0],
//   [0,7,0,0,5,0,4,0,0]
// ];



var tbody = document.getElementsByTagName('tbody')[0];
var rows = tbody.children;
var exWithCandByRows = new Array(9);
var exWithCandByCols = new Array(9);
var exWithCandBySect = [];
for (i = 0; i < 9; i++) {
  exWithCandByRows[i] = new Array(9);
  exWithCandByCols[i] = new Array(9);
}
var arrForRow;
var arrForCol;

//Заполнение таблицы исходными данными
for (var i = 0; i < rows.length; i++) {
  for (var j = 0; j < rows[i].children.length; j++) {
    if (example[i][j]) rows[i].children[j].innerHTML = example[i][j];
  }
}

var flag = true;
var flagSect = false;

function solveSudoku() {
  if (flag) {
    do {
      flag = false;
      exWithCandByRows = renewCandByRows();
      exWithCandByCols = renewCandByCols();
      exWithCandBySect = renewCandBySect();
      example = compareCand();
      example = renewSudoku();
      if (!flag && !flagSect) {
          alert("Sorry... I can't solve this. It's very hard for me yet...");
        }
    } while (flag);
  } else if (!flag && flagSect) {
    alert("Congratulations! We solved it!");
  }
}

function solveSudokuBySteps() {
  if (flag) {
    flag = false;
    exWithCandByRows = renewCandByRows();
    exWithCandByCols = renewCandByCols();
    exWithCandBySect = renewCandBySect();
    example = compareCand();
    example = renewSudoku();
    if (!flag && !flagSect) {
      alert("Sorry... I can't solve this. It's very hard for me yet...");
    } else if (!flag && flagSect) {
      alert("Congratulations! We solved it!");
    }
  }
}

//Обновление кандидатов по строкам строкам
function renewCandByRows() {
  for (i = 0; i < example.length; i++) {
    arrForRow = [1,2,3,4,5,6,7,8,9];
    for (j = 0; j < example[i].length; j++) {
      if (example[i][j]) {
        if (arrForRow.indexOf(example[i][j]) != -1) arrForRow.splice(arrForRow.indexOf(example[i][j]), 1);
      }
    }
    for (j = 0; j < example[i].length; j++) {
      if (!example[i][j]) {
        exWithCandByRows[i][j] = arrForRow;
      } else {
        exWithCandByRows[i][j] = example[i][j];
      }
    }
  }
  return exWithCandByRows;
}

//Обновление кандидатов по секциям
function renewCandBySect() {
  exWithCandBySect = [];
  arrForSect = [1,2,3,4,5,6,7,8,9];
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      if (example[i][j]) {
        if (arrForSect.indexOf(example[i][j]) != -1) arrForSect.splice(arrForSect.indexOf(example[i][j]), 1);
      }
    }
  }
  exWithCandBySect.push(arrForSect);
  arrForSect = [1,2,3,4,5,6,7,8,9];
  for (i = 0; i < 3; i++) {
    for (j = 3; j < 6; j++) {
      if (example[i][j]) {
        if (arrForSect.indexOf(example[i][j]) != -1) arrForSect.splice(arrForSect.indexOf(example[i][j]), 1);
      }
    }
  }
  exWithCandBySect.push(arrForSect);
  arrForSect = [1,2,3,4,5,6,7,8,9];
  for (i = 0; i < 3; i++) {
    for (j = 6; j < 9; j++) {
      if (example[i][j]) {
        if (arrForSect.indexOf(example[i][j]) != -1) arrForSect.splice(arrForSect.indexOf(example[i][j]), 1);
      }
    }
  }
  exWithCandBySect.push(arrForSect);
  arrForSect = [1,2,3,4,5,6,7,8,9];
  for (i = 3; i < 6; i++) {
    for (j = 0; j < 3; j++) {
      if (example[i][j]) {
        if (arrForSect.indexOf(example[i][j]) != -1) arrForSect.splice(arrForSect.indexOf(example[i][j]), 1);
      }
    }
  }
  exWithCandBySect.push(arrForSect);
  arrForSect = [1,2,3,4,5,6,7,8,9];
  for (i = 3; i < 6; i++) {
    for (j = 3; j < 6; j++) {
      if (example[i][j]) {
        if (arrForSect.indexOf(example[i][j]) != -1) arrForSect.splice(arrForSect.indexOf(example[i][j]), 1);
      }
    }
  }
  exWithCandBySect.push(arrForSect);
  arrForSect = [1,2,3,4,5,6,7,8,9];
  for (i = 3; i < 6; i++) {
    for (j = 6; j < 9; j++) {
      if (example[i][j]) {
        if (arrForSect.indexOf(example[i][j]) != -1) arrForSect.splice(arrForSect.indexOf(example[i][j]), 1);
      }
    }
  }
  exWithCandBySect.push(arrForSect);
  arrForSect = [1,2,3,4,5,6,7,8,9];
  for (i = 6; i < 9; i++) {
    for (j = 0; j < 3; j++) {
      if (example[i][j]) {
        if (arrForSect.indexOf(example[i][j]) != -1) arrForSect.splice(arrForSect.indexOf(example[i][j]), 1);
      }
    }
  }
  exWithCandBySect.push(arrForSect);
  arrForSect = [1,2,3,4,5,6,7,8,9];
  for (i = 6; i < 9; i++) {
    for (j = 3; j < 6; j++) {
      if (example[i][j]) {
        if (arrForSect.indexOf(example[i][j]) != -1) arrForSect.splice(arrForSect.indexOf(example[i][j]), 1);
      }
    }
  }
  exWithCandBySect.push(arrForSect);
  arrForSect = [1,2,3,4,5,6,7,8,9];
  for (i = 6; i < 9; i++) {
    for (j = 6; j < 9; j++) {
      if (example[i][j]) {
        if (arrForSect.indexOf(example[i][j]) != -1) arrForSect.splice(arrForSect.indexOf(example[i][j]), 1);
      }
    }
  }
  exWithCandBySect.push(arrForSect);
  var counter = 0;
  for (i = 0; i < exWithCandBySect.length; i++) {
    if (exWithCandBySect[i].length > 0) counter++;
  }
  if (!counter) flagSect = true;
  return exWithCandBySect;
}

//Обновление кандидатов по столбцам
function renewCandByCols() {
  for (i = 0; i < 9; i++) {
    arrForCol = [1,2,3,4,5,6,7,8,9];
    for (j = 0; j < 9; j++) {
      if (example[j][i]) {
        if (arrForCol.indexOf(example[j][i]) != -1) arrForCol.splice(arrForCol.indexOf(example[j][i]), 1);
      }
    }
    for (j = 0; j < 9; j++) {
      if (!example[j][i]) {
        exWithCandByCols[j][i] = arrForCol;
      } else {
        exWithCandByCols[j][i] = example[j][i];
      }
    }
  }
  return exWithCandByCols;
}

//Сократим кандидатов по строкам, столбцам и секциям
function compareCand() {
  var tempArr = new Array(9);
  //По строкам и столбцам
  for (i = 0; i < 9; i++) {
    tempArr[i] = new Array(9);
    for (j = 0; j < 9; j++) {
      if (!example[i][j]) {
        example[i][j] = compare(exWithCandByRows[i][j], exWithCandByCols[i][j]);
      }
      tempArr[i][j] = example[i][j];
    }
  }

  //Предыдущий результат + секции
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      if (Array.isArray(example[i][j])) {
        example[i][j] = compare(example[i][j], exWithCandBySect[0]);
      }
      tempArr[i][j] = example[i][j];
    }
    for (j = 3; j < 6; j++) {
      if (Array.isArray(example[i][j])) {
        example[i][j] = compare(example[i][j], exWithCandBySect[1]);
      }
      tempArr[i][j] = example[i][j];
    }
    for (j = 6; j < 9; j++) {
      if (Array.isArray(example[i][j])) {
        example[i][j] = compare(example[i][j], exWithCandBySect[2]);
      }
      tempArr[i][j] = example[i][j];
    }
  }
  for (i = 3; i < 6; i++) {
    for (j = 0; j < 3; j++) {
      if (Array.isArray(example[i][j])) {
        example[i][j] = compare(example[i][j], exWithCandBySect[3]);
      }
      tempArr[i][j] = example[i][j];
    }
    for (j = 3; j < 6; j++) {
      if (Array.isArray(example[i][j])) {
        example[i][j] = compare(example[i][j], exWithCandBySect[4]);
      }
      tempArr[i][j] = example[i][j];
    }
    for (j = 6; j < 9; j++) {
      if (Array.isArray(example[i][j])) {
        example[i][j] = compare(example[i][j], exWithCandBySect[5]);
      }
      tempArr[i][j] = example[i][j];
    }
  }
  for (i = 6; i < 9; i++) {
    for (j = 0; j < 3; j++) {
      if (Array.isArray(example[i][j])) {
        example[i][j] = compare(example[i][j], exWithCandBySect[6]);
      }
      tempArr[i][j] = example[i][j];
    }
    for (j = 3; j < 6; j++) {
      if (Array.isArray(example[i][j])) {
        example[i][j] = compare(example[i][j], exWithCandBySect[7]);
      }
      tempArr[i][j] = example[i][j];
    }
    for (j = 6; j < 9; j++) {
      if (Array.isArray(example[i][j])) {
        example[i][j] = compare(example[i][j], exWithCandBySect[8]);
      }
      tempArr[i][j] = example[i][j];
    }
  }
  return example;
}

//Обновить судоку
function renewSudoku() {
  for (i = 0; i < 9; i++) {
    for (j = 0; j < 9; j++) {
      if (Array.isArray(example[i][j]) && (example[i][j].length == 1)) {
        example[i][j] = example[i][j][0];
        rows[i].children[j].innerHTML = example[i][j];
        rows[i].children[j].style.color = 'blue';
        flag = true;
      } else if (Array.isArray(example[i][j]) && (example[i][j].length != 1)) {
        example[i][j] = 0;
      }
    }
  }
  return example;
}

//Сравнить два массива и оставить только совпадающие элементы
function compare(arr1, arr2) {
  var arr3 = [];
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if ((arr1[i] == arr2[j]) && (arr3.indexOf(arr1[i]) == -1)) arr3.push(arr1[i]);
    }
  }
  return arr3;
}

function reset() {
  location.reload();
}
