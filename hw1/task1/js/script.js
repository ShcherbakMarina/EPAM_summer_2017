/*Известны координаты на плоскости двух точек. Составить программу вычисления расстояния между ними.*/

var doc = document.getElementById('container');

var a = [1,2];
var b = [3,4];

var res = Math.sqrt(Math.pow((b[1] - a[1]), 2) + Math.pow((b[0] - a[0]), 2));

doc.innerHTML = 'Расстояние между точками = ' + res;
