/*Дано четырехзначное число. Определить:
а) входят ли в него цифры 2 или 7;
б) входят ли в него цифры 3, 6 или 9.
*/

var doc = document.getElementById('container');
var num = 1245;
num += '';

if (num.search(/[27]/) != -1) {
	doc.innerHTML += 'число содержит 2 или 7';
} else {
	doc.innerHTML += 'число НЕ содержит 2 или 7';
}

doc.innerHTML += '<br>';

if (num.search(/[369]/) != -1) {
	doc.innerHTML += 'число содержит 3, 6 или 9';
} else {
	doc.innerHTML += 'число НЕ содержит 3, 6 или 9';
}
